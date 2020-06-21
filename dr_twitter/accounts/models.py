from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_profile')
    image = models.ImageField(upload_to='profile/image', null=True, blank=True)
    following = models.ManyToManyField(User, blank=True)

    def __str__(self):
        return self.user.username
