from django.urls import path
from knox import views as knox_views

from authentication.views import LoginView, CurrentUserView

urlpatterns = [
    path(r'login/', LoginView.as_view(), name='knox_login'),
    path(r'logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    path(r'me/', CurrentUserView.as_view(), name='current-user'),
]
