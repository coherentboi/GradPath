from django.contrib.auth import authenticate
from rest_framework.exceptions import ValidationError


def authenticate_user(username, password):
    # print(email, password)
    user = authenticate(username=username, password=password)
    # print(user)
    # print(User.objects.get(email=email))
    if not user:
        raise ValidationError("Incorrect Credentials.")
    return user
