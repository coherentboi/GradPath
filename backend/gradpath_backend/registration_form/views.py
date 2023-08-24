import asyncio
import logging

from asgiref.sync import async_to_sync
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
        async_to_sync(self.send_email_async)()

    async def send_email_async(self):
        await asyncio.get_running_loop().run_in_executor(None, self.send_email)

    def send_email(self):
        try:
            send_mail(
                'Someone submitted the registration form!',
                'View the details here at https://gradpathtutoring.com/api/admin',
                settings.EMAIL_HOST_USER,
                [settings.EMAIL_HOST_USER],
                fail_silently=True,
            )
        except Exception as e:
            logging.error(f'Failed to send email: {e}')