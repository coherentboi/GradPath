from django.urls import path
from .views import RegistrationFormCreateView

urlpatterns = [
    path('registration-form/', RegistrationFormCreateView.as_view(), name='registration-form'),
]
