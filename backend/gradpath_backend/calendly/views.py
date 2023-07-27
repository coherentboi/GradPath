import requests
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import datetime, timezone
from gradpath_backend.settings import CALENDLY_API_TOKEN, CALENDLY_ORGANIZATION


class CalendlyEventsView(APIView):
    permission_classes = [IsAuthenticated]
    CALENDLY_API_HEADERS = {
        'Authorization': f'Bearer {CALENDLY_API_TOKEN}',
    }

    def get(self, request):
        active_events = self.get_active_events()
        active_events_for_current_user = self.get_active_events_for_current_user(active_events)
        return Response(active_events_for_current_user)

    def get_active_events(self):
        page_token = None
        active_events = []
        current_time = datetime.now(timezone.utc)

        while True:
            params = {"count": 100}
            if page_token:
                params["page_token"] = page_token

            response = requests.get(f"https://api.calendly.com/scheduled_events/?organization={CALENDLY_ORGANIZATION}",
                                    headers=self.CALENDLY_API_HEADERS, params=params)
            data = response.json()

            for event in data['collection']:
                event_end_time = datetime.fromisoformat(event['end_time'].replace("Z", "+00:00"))

                tutor_response = requests.get(event["event_memberships"][0]["user"], headers=self.CALENDLY_API_HEADERS)
                tutor_data = tutor_response.json()

                if event_end_time > current_time:
                    active_events.append(
                        {
                            "start_time": event['start_time'],
                            "end_time": event["end_time"],
                            "uri": event['uri'],
                            "tutor_name": tutor_data["resource"]["name"],
                            "tutor_email": tutor_data["resource"]["email"],
                            "google_meet_link": event["location"]["join_url"]
                        })

            page_token = data['pagination']['next_page_token']

            if not page_token:
                break

        return active_events

    def get_active_events_for_current_user(self, active_events):
        events = []

        for event in active_events:
            response = requests.get(f"{event['uri']}/invitees", headers=self.CALENDLY_API_HEADERS,
                                    params={"count": 100})
            data = response.json()
            for invitee in data["collection"]:
                if invitee["email"] == self.request.user.email:
                    events.append(event)
                    events[-1]["reschedule_url"] = invitee["reschedule_url"]
                    events[-1]["cancel_url"] = invitee["cancel_url"]

        return events
