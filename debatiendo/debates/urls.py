from django.urls import path

from .views import *

app_name = 'debates'

urlpatterns = [
    path('', DebatesView.as_view(), name='debates'),
    path('<slug:slug>/', ComentariosView.as_view())
]
