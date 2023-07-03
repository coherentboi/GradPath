import phonenumbers
from rest_framework import serializers

from .models import RegistrationForm


class RegistrationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistrationForm
        fields = ('first_name', 'last_name', 'phone', 'email',
                  'school', 'grade', 'subject', 'comments', 'created_at', 'updated_at')

    def validate_phone(self, value):
        try:
            phone_number = phonenumbers.parse(value, "CA")
        except phonenumbers.phonenumberutil.NumberParseException:
            raise serializers.ValidationError('Invalid phone number format')

        if not phonenumbers.is_valid_number(phone_number):
            raise serializers.ValidationError('Invalid phone number')

        return value
