# Create your views here.
from django.http import HttpResponse, response
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Post
from .forms import CreatePostForm

def homePage(request):
    posts = Post.objects.all()
    context = {'posts':posts}
    
    return render(request, 'home.html', context)
    # response =  HttpResponse('Hello Django')
    # return response

# @login_required(login_url='')
def createPost(request):
    form = CreatePostForm()
    if request.method == 'POST':
        form = CreatePostForm(request.POST)
        if form.is_valid:
            form.save()

        return redirect('home')
        # response =  HttpResponse('Hello Django')
    # return response
    context = {'form':form}
    return render(request, 'create-post.html', context)


