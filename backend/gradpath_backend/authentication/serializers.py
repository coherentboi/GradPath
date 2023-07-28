import re

from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers, validators
from rest_framework.exceptions import ValidationError

from authentication.models import authenticate_user, Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('name', 'school', 'high_school_graduation_year')


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()  # Include the profile serializer

    class Meta:
        model = User
        fields = ("id", "username", "email", "profile")  # Include profile in fields
        read_only_fields = ("id", "username", "email", "profile")


def validate_username(value):
    if not re.match('^[a-zA-Z0-9]*$', value):
        raise ValidationError('Username can only contain alphanumeric characters.')


class RegisterSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'profile')
        extra_kwargs = {
            'username': {'validators': [validators.UniqueValidator(queryset=User.objects.all()), validate_username]},
            'email': {'validators': [validators.UniqueValidator(queryset=User.objects.all())]},
            'password': {'write_only': True, 'validators': [validate_password]},
        }

    def validate(self, attrs):
        profile = attrs.get('profile')
        if not profile:
            raise serializers.ValidationError('Profile information must be provided.')

        # Validate profile data separately
        profile_serializer = ProfileSerializer(data=profile)
        if not profile_serializer.is_valid():
            raise serializers.ValidationError(profile_serializer.errors)

        return attrs

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        user = User.objects.create_user(username=validated_data["username"],
                                        email=validated_data["email"],
                                        password=validated_data["password"])
        Profile.objects.create(user=user, **profile_data)
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        return {"user": authenticate_user(username=data["username"], password=data["password"])}
