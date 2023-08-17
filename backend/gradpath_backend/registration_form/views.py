from rest_framework.generics import CreateAPIView

from .models import RegistrationForm
from .serializers import RegistrationFormSerializer


class RegistrationFormCreateView(CreateAPIView):
    queryset = RegistrationForm.objects.all()
    serializer_class = RegistrationFormSerializer
