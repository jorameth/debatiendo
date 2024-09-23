from django import forms
from .models import *

class DebateForm(forms.ModelForm):
   class Meta:
      model = Debate
      fields = '__all__'


class ComentarioForm(forms.ModelForm):
   class Meta:
      model = Comentario
      fields = '__all__'