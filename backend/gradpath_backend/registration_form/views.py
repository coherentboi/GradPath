from django.core.mail import send_mail
from rest_framework.generics import CreateAPIView

from gradpath_backend import settings
from .models import RegistrationForm
from .serializers import RegistrationFormSerializer


class RegistrationFormCreateView(CreateAPIView):
    queryset = RegistrationForm.objects.all()
    serializer_class = RegistrationFormSerializer

    def perform_create(self, serializer):
        instance = serializer.save()

        send_mail(
            'Someone submitted the registration form!',
            'View the details here at https://gradpathtutoring.com/api/admin!',
            settings.EMAIL_HOST_USER,  # Sender's email address, taken from settings.py
            [settings.EMAIL_HOST_USER],
            fail_silently=False,
        )
