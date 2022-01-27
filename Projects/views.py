# Create your views here.
from http.client import HTTPResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Project

def homePage(request):
    projects = Project.objects.all()
    context = {'projects':projects}
    
    # return render(context, 'api/base.html')
    return HTTPResponse('Heloo Django')

# @login_required(login_url='')


