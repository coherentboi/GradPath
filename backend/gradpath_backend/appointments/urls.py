from django.urls import path
from .views import AppointmentsView

urlpatterns = [
    path('appointments/', AppointmentsView.as_view(), name='appointments'),
]