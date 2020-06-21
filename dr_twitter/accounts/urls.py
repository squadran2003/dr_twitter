from django.urls import path

from . import views

app_name = 'accounts'

urlpatterns = [
    path('profile/', views.ListProfileView.as_view(), name='profile'),
    path('follow/', views.FollowView.as_view(), name='follow'),

]