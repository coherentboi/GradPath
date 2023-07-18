from django.contrib import admin

from authentication.models import Profile


@admin.register(Profile)
class RegistrationFormAdmin(admin.ModelAdmin):
    pass
