import requests
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import datetime, timezone
from gradpath_backend.settings import CALENDLY_API_TOKEN, CALENDLY_ORGANIZATION


class CalendlyEventsView(APIView):
    calendly_api = f"https://api.calendly.com/scheduled_events/?organization={CALENDLY_ORGANIZATION}"
    count = 100
    permission_classes = [IsAuthenticated]

    def get(self, request):
        active_events = self.get_active_events()
        active_events_for_current_user = self.get_active_events_for_current_user(active_events)
        return Response(active_events_for_current_user)

    def get_active_events(self):
        page_token = None
        active_events = []
        current_time = datetime.now(timezone.utc)
        headers = {
            'Authorization': f'Bearer {CALENDLY_API_TOKEN}',
        }

        while True:
            params = {"count": self.count}
            if page_token:
                params["page_token"] = page_token

            response = requests.get(self.calendly_api, headers=headers, params=params)
            data = response.json()

            for event in data['collection']:
                event_end_time = datetime.fromisoformat(event['end_time'].replace("Z", "+00:00"))

                if event_end_time > current_time:
                    active_events.append(
                        {
                            "start_time": event['start_time'],
                            "end_time": event["end_time"],
                            "uri": event['uri'],
                            "tutor": event["event_memberships"][0]["user_email"],
                            "google_meet_link": event["location"]["join_url"]
                        })

            page_token = data['pagination']['next_page_token']

            if not page_token:
                break

        return active_events

    def get_active_events_for_current_user(self, active_events):
        events = []
        headers = {
            'Authorization': f'Bearer {CALENDLY_API_TOKEN}',
        }

        for event in active_events:
            response = requests.get(f"{event['uri']}/invitees", headers=headers, params={"count": 100})
            data = response.json()
            for invitee in data["collection"]:
                if invitee["email"] == self.request.user.email:
                    events.append(event)
                    events[-1]["reschedule_url"] = invitee["reschedule_url"]
                    events[-1]["cancel_url"] = invitee["cancel_url"]

        return events
