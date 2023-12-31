from django.contrib.auth.models import User
from django.http import JsonResponse
from knox.models import AuthToken
from rest_framework import generics, status
from rest_framework.generics import UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from authentication.serializers import UserSerializer, LoginSerializer, RegisterSerializer, ProfileSerializer


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    queryset = User.objects.all()


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        return JsonResponse({
            "user": UserSerializer(user).data,
            "token": AuthToken.objects.create(user)[1]
        })


class CurrentUserView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class EditProfileView(UpdateAPIView):
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.profile

    def update(self, request, *args, **kwargs):
        user = self.request.user
        profile = user.profile

        # Verify existing password
        current_password = request.data.get('current_password')
        if not current_password or not user.check_password(current_password):
            return Response({"error": "Current password is incorrect."}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the new username is unique
        new_username = request.data.get('username')
        if new_username and User.objects.filter(username=new_username).exclude(pk=user.pk).exists():
            return Response({"error": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST)

        # Update other profile fields (except has_paid and email)
        serializer = ProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():

            # Update username if provided
            if new_username:
                user.username = new_username

            # Update password if provided
            password = request.data.get('password')
            if password:
                user.set_password(password)

            user.save()

            profile_data = serializer.validated_data
            if "has_paid" in profile_data:
                del profile_data["has_paid"]  # Remove has_paid field if present

            for field, value in profile_data.items():
                setattr(profile, field, value)

            profile.save()

            return Response(UserSerializer(request.user).data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
