from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .models import Profile
from .serializers  import ProfileSerializer


class ListProfileView(APIView):
    def get(self, request, format=None):
        profile = Profile.objects.get(user=self.request.user.id)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class FollowView(APIView):
    def post(self, request, format=None):
        profile = Profile.objects.get(user=self.request.user.id)
        to_follow = User.objects.get(
            pk=request.data['to_follow']
        )
        profile.following.add(to_follow)
        profile.save()
        serializer = ProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

       