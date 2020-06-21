from django.contrib import admin
from .models import Tweet,Comment

# Register your models here.
class TweetAdmin(admin.ModelAdmin):
    fields = (
    	'user','tweet','likes',
    )
    search_field = (
    	'user'
    )


class CommentAdmin(admin.ModelAdmin):
    fields = (
    	'user','tweet','comment'
    )
    search_field = (
    	'user'
    )


admin.site.register(Tweet, TweetAdmin)
admin.site.register(Comment, CommentAdmin)

