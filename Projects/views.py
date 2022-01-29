# Create your views here.
from django.http import HttpResponse, response
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Post, Comment
from .forms import CreatePostForm, CreateCommentForm

def homePage(request):
    posts = Post.objects.all()
    comments = Comment.objects.all()
    context = {'posts':posts, 'comments':comments}
    
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
# login_required(login_url='')
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



# login_required(login_url='')
def createComment(request):
    form = CreateCommentForm()
    if request.method == 'POST':
        form = CreateCommentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('homepage')
            


    context = {'form':form}
    return render(request, 'create-comment.html', context)


def updateComment(request, pk):
    comment = Comment.objects.get(id=pk)
    form = CreateCommentForm(instance=comment)
    if request.method == 'POST':
        form = CreateCommentForm(request.POST, instance=comment)
        if form.is_valid():
            comment.save()
            return redirect('homepage')
    context = {'comment':comment, 'form':form}
    return render(request, 'update-comment.html', context)

def deleteComment(request, pk):
    comment = Comment.objects.get(id=pk)
    if request.method == 'POST':
        comment.delete()
        return redirect('homepage')
    
    return render(request, 'delete-comment.html', {'obj':comment})