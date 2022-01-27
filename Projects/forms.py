from django.forms import ModelForm
from .models import Project

class CreateProjectForm(ModelForm):
    class Meta:
        model = Project
        fields ='__all__'
        exclude = ['host']
        