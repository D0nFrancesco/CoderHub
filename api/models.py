from os import name
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class projects(models.Model):
    host = models.CharField(max_length=200, unique=True)
    topic = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class subjects(models.Model):
    topic = models.CharField(max_length=50)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class community(models.Model):
    topic = models.CharField(max_length=50)
    name = models.CharField(max_length=20)
    desciption = models.TextField(max_length=100, null=True)
    created_at = models.DateTimeField(auto_now_add=True)