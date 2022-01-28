from datetime import date
from os import name
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Project(models.Model):
    host = models.CharField(max_length=200, unique=True)
    topic = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Post(models.Model):
    # user = 
    name = models.CharField(max_length=200, null=True)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField(max_length= 350, null=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.name

class Subject(models.Model):
    topic = models.CharField(max_length=50)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Community(models.Model):
    topic = models.CharField(max_length=50)
    name = models.CharField(max_length=20)
    desciption = models.TextField(max_length=100, null=True)
    created_at = models.DateTimeField(auto_now_add=True)