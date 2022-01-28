from django.urls import path
from . import views

urlpatterns = [  
    path('home/', views.homePage, name='home' ),
    path('create-post/', views.createPost, name='create-post' ),
]