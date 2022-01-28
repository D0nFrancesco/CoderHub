from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [  
    path('login', views.login_user, name='login'),
    path('logout_user', views.logout_user, name='logout'),
    path('register', views.register_user, name='register_user'),
    path('home', views.home, name='home')
]