from django.urls import path
from . import views

urlpatterns = [  
    path('home/', views.homePage, name='home' ),
    path('create-post/', views.createPost, name='create-post' ),
    path('delete-post/<str:pk>/', views.deletePost, name='delete-post' ),
]