from rest_framework import serializers
from .models import Profile, User

class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_other_name')
    followers = serializers.SerializerMethodField('follow')

    class Meta:
        model=Profile
        fields = [
            	'user','username', 'image','following','followers'
        ]
    
    def get_other_name(self, obj):
        return obj.user.username
    
    def follow(self, obj):
        return obj.user.profile_set.count()

    