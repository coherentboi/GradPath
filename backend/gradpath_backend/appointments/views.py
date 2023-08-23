import json
import os
from datetime import datetime

import mysql.connector
import pytz
from rest_framework.views import APIView
from rest_framework.response import Response


class AppointmentsView(APIView):
    def get(self, request):
        # Get the email of the currently logged-in user
        email = request.user.email

        # Connection configuration
        connection = mysql.connector.connect(
            host=os.getenv('MYSQL_HOST'),
            user=os.getenv('MYSQL_USER'),
            password=os.getenv('MYSQL_PASSWORD'),
            database='easyappointments'
        )

        cursor = connection.cursor(dictionary=True)

        # Convert current time to Toronto time
        toronto_tz = pytz.timezone('America/Toronto')
        current_time_toronto = datetime.now(toronto_tz).strftime('%Y-%m-%d %H:%M:%S')

        query = '''
        SELECT ea_appointments.*
        FROM ea_appointments
        JOIN ea_users
        ON ea_appointments.id_users_customer = ea_users.id
        WHERE ea_appointments.end_datetime > %s
        AND ea_appointments.is_unavailable = 0
        AND ea_users.email = %s
        '''

        cursor.execute(query, (current_time_toronto, email))

        appointments = cursor.fetchall()

        # Convert datetime objects to strings
        for appointment in appointments:
            appointment['start_datetime'] = appointment['start_datetime'].strftime('%Y-%m-%d %H:%M:%S')
            appointment['end_datetime'] = appointment['end_datetime'].strftime('%Y-%m-%d %H:%M:%S')
            appointment['book_datetime'] = appointment['book_datetime'].strftime('%Y-%m-%d %H:%M:%S') if appointment['book_datetime'] else None

        # Close the connection
        cursor.close()
        connection.close()

        return Response(appointments)
