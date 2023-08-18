from rest_framework.views import APIView
from rest_framework.response import Response
from requests.auth import HTTPBasicAuth
import requests
from django.conf import settings


class AppointmentsView(APIView):
    def get(self, request):
        # Get the email of the currently logged-in user
        user_email = request.user.email

        # Define the basic authentication headers
        auth = HTTPBasicAuth(settings.EA_ADMIN_USER, settings.EA_ADMIN_PASS)

        # Get all customers
        customer_url = f"{settings.EA_URL}api/v1/customers"
        customer_response = requests.get(customer_url, auth=auth)
        customer_data = customer_response.json()

        # Find the customer matching the email
        customer_id = None
        for customer in customer_data:
            if customer['email'] == user_email:
                customer_id = customer['id']
                break

        if customer_id is None:
            return Response([])

        # Get all appointments
        appointments_url = f"{settings.EA_URL}api/v1/appointments"
        appointments_response = requests.get(appointments_url, auth=auth)
        all_appointments_data = appointments_response.json()

        # Filter the appointments for the customer
        customer_appointments_data = [appointment for appointment in all_appointments_data if
                                      appointment['customerId'] == customer_id]

        # Transform the appointments with provider and service details
        transformed_appointments = []
        for appointment in customer_appointments_data:
            provider_url = f"{settings.EA_URL}api/v1/providers/{appointment['providerId']}"
            provider_response = requests.get(provider_url, auth=auth)
            provider_data = provider_response.json()

            service_url = f"{settings.EA_URL}api/v1/services/{appointment['serviceId']}"
            service_response = requests.get(service_url, auth=auth)
            service_data = service_response.json()

            transformed_appointment = appointment
            transformed_appointment['providerName'] = provider_data['firstName'] + ' ' + provider_data['lastName']
            transformed_appointment['providerEmail'] = provider_data['email']
            transformed_appointment['serviceName'] = service_data['name']

            transformed_appointments.append(transformed_appointment)

        return Response(transformed_appointments)
