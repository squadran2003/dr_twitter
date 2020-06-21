from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from .serializers import (
    TweetSerializer,NewTweetSerializer,
    CommentSerializer,
    UserSerializer
   
)
from .models import Tweet, Comment
from django.contrib.auth.models import User

from rest_framework.views import APIView


class LoggedInUserView(APIView):
    def get(self, request, **kwargs):
        data = {
            'id':self.request.user.id,
            'username':self.request.user.username
        }
        serializer = UserSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)

    
class AddTweetView(APIView):
    def post(self, request, format=None):
        request.data['user']=self.request.user.id
        print(request.data)
        serializer = NewTweetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TweetList(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


class CommentList(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    
    def list(self,request,**kwargs):
        tweet = self.kwargs.get('tweet')
        queryset = Comment.objects.filter(
            tweet=tweet
        )
        serializer = CommentSerializer(queryset, many=True)
        return Response(serializer.data)


class NewCommentView(APIView):
    def post(self, request, format=None):
        request.data['user']=self.request.user.id
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddTweetLike(APIView):
    def post(self, request, **kwargs):
        tweet = Tweet.objects.get(pk=
            self.request.data.get('tweet')
        )
        tweet.likes.add(self.request.user)
        tweet.save()
        serializer = TweetSerializer(tweet)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)


