from django.urls import path
from .views import CalendlyEventsView

urlpatterns = [
    path('calendly_events/', CalendlyEventsView.as_view(), name='calendly_events'),
]
