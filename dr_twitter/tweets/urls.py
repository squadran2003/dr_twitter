from django.urls import path

from . import views

app_name = 'tweets'

urlpatterns = [
    path('comment/add/', views.NewCommentView.as_view(), name='new-comment'),
    path('user/id/', views.LoggedInUserView.as_view(), name='loggedin-user'),
    path('like/', views.AddTweetLike.as_view(), name="new-like"),
    path('comment/<tweet>/', views.CommentList.as_view(), name='comments'),
    path('add/', views.AddTweetView.as_view(), name='add'),
    path('', views.TweetList.as_view(), name='list'),

]