from django.forms import ModelForm
from .models import Post, Comment

class CreatePostForm(ModelForm):
    class Meta:
        model = Post
        fields ='__all__'
        exclude = ['creator']

class CreateCommentForm(ModelForm):
    class Meta:
        model = Comment
        fields = '__all__'
        exclude = ['user']
        
        