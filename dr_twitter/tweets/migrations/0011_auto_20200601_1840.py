# Generated by Django 2.1.7 on 2020-06-01 18:40

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tweets', '0010_remove_social_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='like',
            name='tweet',
        ),
        migrations.RemoveField(
            model_name='like',
            name='user',
        ),
        migrations.AddField(
            model_name='tweet',
            name='likes',
            field=models.ManyToManyField(related_name='tweet_likes', to=settings.AUTH_USER_MODEL),
        ),
        migrations.RemoveField(
            model_name='tweet',
            name='retweet',
        ),
        migrations.AddField(
            model_name='tweet',
            name='retweet',
            field=models.ManyToManyField(related_name='tweet_retweet', to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='Like',
        ),
    ]
