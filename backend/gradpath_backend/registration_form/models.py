from django.db import models


class RegistrationForm(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=15)
    email = models.EmailField(max_length=254)
    school = models.CharField(max_length=50)
    grade = models.CharField(max_length=10)
    subject = models.CharField(max_length=50)
    how_found = models.CharField(max_length=50)
    is_parent = models.BooleanField(default=False)
    comments = models.TextField(blank=True, null=True)
    reviewed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{"[Reviewed] " if self.reviewed else ""}{self.first_name} {self.last_name}'
