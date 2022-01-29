from django.urls import path
from . import views

urlpatterns = [  
    path('homepage/', views.homePage, name='homepage' ),
    path('create-post/', views.createPost, name='create-post' ),
    path('delete-post/<str:pk>/', views.deletePost, name='delete-post' ),
    path('update-post/<str:pk>/', views.updatePost, name='update-post' ),
    path('create-comment/', views.createComment, name='create-comment' ),
    path('update-comment/<str:pk>/', views.updateComment, name='update-comment' ),
    path('delete-comment/<str:pk>/', views.deleteComment, name='delete-comment' ),
]