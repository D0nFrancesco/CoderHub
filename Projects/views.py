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

    context = {'form':form}
    return render(request, 'create-post.html', context)

# login_required(login_url='')
def deletePost(request, pk):
    post = Post.objects.get(id=pk)
    
    if request.method == 'POST':
        post.delete() 
        return redirect('home')
    
    
    return render (request, 'delete-post.html', {'obj':post})



