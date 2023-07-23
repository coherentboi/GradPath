from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db import models
from rest_framework.exceptions import ValidationError


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    has_paid = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username


def authenticate_user(username, password):
    user = authenticate(username=username, password=password)
    if not user:
        raise ValidationError("Incorrect Credentials.")
    return user
