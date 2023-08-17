from django.contrib import admin
from .models import RegistrationForm


@admin.register(RegistrationForm)
class RegistrationFormAdmin(admin.ModelAdmin):
    readonly_fields = ("created_at", "updated_at")
    list_filter = ('reviewed',)
