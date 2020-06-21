from rest_framework import serializers
from .models import Tweet, Comment
from django.contrib.auth.models import User


class TweetSerializer(serializers.ModelSerializer):
    comments = serializers.StringRelatedField(many=True)
    likes = serializers.SerializerMethodField('likes')
    class Meta:
        model=Tweet
        fields = [
            	'id','user','tweet','retweet','likes','comments'
        ]
    
    def likes(self, obj):
        print(obj.likes.count())
        return obj.likes.count()


class CommentSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_other_name')
    class Meta:
        model=Comment
        fields = [
            	'id','tweet','user','username','comment'
        ]
    
    def get_other_name(self, obj):
        return obj.user.username
    

class NewTweetSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tweet
        fields = [
            	'user','tweet'
        ]


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=User
        fields = [
            	'id','username',
        ]

    
