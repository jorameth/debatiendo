from json import loads
from django.shortcuts import render, get_object_or_404
from django.views.generic import View, CreateView, UpdateView, ListView, DetailView, FormView
from django.http import HttpResponse, JsonResponse

from .models import Debate, Comentario
from .forms import *
from debatiendo.views import get_json_user

class LocalFormView(FormView):
   def form_valid(self, form):
      self.object = form.save()
      return JsonResponse({'success': True, 'obj': self.object.to_json()})

   def form_invalid(self, form):
      print(form.errors)
      return JsonResponse({'success': False, 'errors': [ str(error) for error in form.errors ]})

   def post(self, request, *args, **kwargs):
      form = self.form_class(request.POST)
      if form.is_valid():
         return self.form_valid(form)
      else:
         return self.form_invalid(form)

   
class DebatesView(LocalFormView):
   model = Debate
   form_class = DebateForm

   def get_queryset(self):
      self.queryset = self.model.objects.all()
      return self.queryset
   
   def get(self, request, *args, **kwargs):
      
      if 'pk' in self.kwargs:
         self.object = self.get_object()
         return JsonResponse({'success': True, 'obj' : self.object.to_json()})
      else:
         self.object_list = self.get_queryset()
         return JsonResponse({ 'success': True,  'object_list' : [obj.to_json() for obj in self.object_list.all()]})

   
class ComentariosView(LocalFormView):
   model = Comentario
   form_class = ComentarioForm
 
   def get(self, request, *args, **kwargs):
      slug = kwargs.get('slug', None)
      if slug is not None:
         try:
            self.debate = Debate.objects.get(slug=slug)
            data = {
               'success': True,
               'debate': self.debate.to_json(),
               'comentarios': [ comentario.to_json() for comentario in self.debate.comentario_set.all() ]
            }
            
            return JsonResponse(data)
         except Exception as e:
            print(e)
            data = {'success': False}

      data.update({ 'usuario' : get_json_user(request.user)})

      return JsonResponse(data)

   def post(self, request, *args, **kwargs):
      data = request.POST.copy()

      slug = self.kwargs.get('slug', None)
      if slug is not None:
         usuario = request.user
         debate = get_object_or_404(Debate, slug=slug)
         if usuario.is_authenticated and isinstance(debate, Debate) and debate.tipo == '1':
            data.update({
               'usuario' : get_json_user(usuario),
               'usuario': usuario.id,
               'debate': debate.id,
            })

         setattr(request, 'POST', data)

      return super().post(request, *args, **kwargs)
      

