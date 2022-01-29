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
        return redirect('homepage')

    context = {'form':form}
    return render(request, 'create-post.html', context)

# login_required(login_url='')
def deletePost(request, pk):
    post = Post.objects.get(id=pk)
    
    if request.method == 'POST':
        post.delete() 
        return redirect('homepage')
    
    
    return render (request, 'delete-post.html', {'obj':post})

def updatePost(request,pk):
    post = Post.objects.get(id=pk)
    form = CreatePostForm(instance=post)
    if request.method == 'POST':
        form = CreatePostForm(request.POST, instance=post)
        if form.is_valid():
            post.save()
        
        return redirect('homepage')
    context = {'post':post, 'form':form}
    return render(request, 'update-post.html', context)



