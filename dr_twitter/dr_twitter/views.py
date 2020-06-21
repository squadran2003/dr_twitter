from django.shortcuts import render
from django.shortcuts import redirect
from accounts.models import Profile
from django.contrib.auth.models import User

def home(request):
    if not request.user.is_authenticated:
        return redirect('/login')
    # create a dummy profile for a logged in user
    try:
        Profile.objects.get(user=request.user.pk)
    except Profile.DoesNotExist:
        Profile.objects.create(
            user=User.objects.get(pk=request.user.pk),
        )
    return render(request, 'index.html')
