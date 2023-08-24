import threading
from django.core.mail import send_mail
from gradpath_backend import settings
from rest_framework.generics import CreateAPIView
from .models import RegistrationForm
from .serializers import RegistrationFormSerializer

def send_email():
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

class RegistrationFormCreateView(CreateAPIView):
    queryset = RegistrationForm.objects.all()
    serializer_class = RegistrationFormSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        thread = threading.Thread(target=send_email)
        thread.start()  # This will start the email sending in a separate thread

