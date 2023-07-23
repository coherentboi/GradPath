import re

from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers, validators
from rest_framework.exceptions import ValidationError

from authentication.models import authenticate_user, Profile


class UserSerializer(serializers.ModelSerializer):
    has_paid = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ("id", "username", "email", "has_paid")
        read_only_fields = ("id", "username", "email")

    def get_has_paid(self, obj):
        return Profile.objects.get(user=obj).has_paid


def validate_username(value):
    if not re.match('^[a-zA-Z0-9]*$', value):
        raise ValidationError('Username can only contain alphanumeric characters.')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {
            'username': {'validators': [validators.UniqueValidator(queryset=User.objects.all()), validate_username]},
            'email': {'validators': [validators.UniqueValidator(queryset=User.objects.all())]},
            'password': {'write_only': True, 'validators': [validate_password]},
        }

    def create(self, validated_data):
        return User.objects.create_user(username=validated_data["username"],
                                        email=validated_data["email"],
                                        password=validated_data["password"])


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        return {"user": authenticate_user(username=data["username"], password=data["password"])}
