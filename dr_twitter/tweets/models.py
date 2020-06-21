from django.db import models
from django.contrib.auth.models import User


class Tweet(models.Model):
	user = models.ForeignKey(User,on_delete=models.CASCADE)
	tweet = models.TextField()
	retweet = models.ManyToManyField(User, related_name='tweet_retweet')
	likes = models.ManyToManyField(User, related_name='tweet_likes')
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering=('-created_at',)

	def __str__(self):
		return str(self.pk)


class Comment(models.Model):
	tweet = models.ForeignKey(Tweet,related_name='comments',on_delete=models.CASCADE)
	user = models.ForeignKey(User,on_delete=models.CASCADE)
	comment = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering=('-created_at',)

	def __str__(self):
		return str(self.comment)



