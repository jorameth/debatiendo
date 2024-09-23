from django.contrib import admin
from django.contrib.admin.decorators import register
from .models import  *


@register(Debate)
class DebatesAdmin(admin.ModelAdmin):
   list_display = ('titulo','slug','tipo','creado','actualizado',)

@register(Comentario)
class ComentarioAdmin(admin.ModelAdmin):
   list_display = ['debate', 'usuario', 'comentario', 'creado' ]