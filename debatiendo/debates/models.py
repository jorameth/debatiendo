from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


class Debate(models.Model):
   titulo = models.CharField(max_length=128)
   slug = models.SlugField(editable=True)
   tipo = models.CharField(max_length=1, choices=(('1','Abierto'), ('0','Cerrado')), default='1')
   descripcion = models.TextField()
   creado = models.DateTimeField(auto_now_add=True)
   actualizado = models.DateTimeField(auto_now=True)
   password = models.CharField(max_length=128, blank=True, null=True)

   acuerdo = models.TextField(editable=False)

   def __str__(self):
       return self.titulo
   
   def to_json(self):
      return {
         'id': self.id,
         'titulo': self.titulo,
         'descripcion': self.descripcion,
         'slug': self.slug,
         'tipo': self.tipo,
         'creado': self.creado,
         'actualizado': self.actualizado
      }

   def save(self, *args, **kwargs):
      if not self.pk:
         self.slug = slugify(self.titulo)

      super(Debate, self).save(*args, **kwargs)

   
class Comentario(models.Model):
   debate = models.ForeignKey(Debate, models.PROTECT)
   usuario = models.ForeignKey(User, models.PROTECT)
   comentario = models.TextField()
   es_replica = models.BooleanField(default=False)
   creado = models.DateTimeField(auto_now_add=True)
   actualizado = models.DateTimeField(auto_now=True)
   

   def to_json(self):
      name = self.usuario.get_full_name() or self.usuario.get_short_name() or self.usuario.username
      
      return {
         'id': self.id,
         'debate': self.debate_id,
         'isReply': self.es_replica, # Porque asi se necesita en el frontend
         'usuario_id': self.usuario_id,
         'usuario': {
            'name': name
         },
         'comentario': self.comentario,
         'creado': self.creado.strftime('%d/%m/%Y %H:%m'),
         'actualizado': self.actualizado.strftime('%d/%m/%Y %H:%m')
      }


class Voto(models.Model):
   comentartio = models.ForeignKey(Comentario, models.PROTECT)
   usuario = models.ForeignKey(User, models.PROTECT)
   voto = models.CharField(max_length=1, choices=(('0', 'No de acuerdo'), ('1', 'Bueno'), ('2', 'Muy Bueno')))
   creado = models.DateTimeField(auto_now_add=True)
   actualizado = models.DateTimeField(auto_now=True)

   def to_json(self):
      return {
         'id': self.id,
         'comentario': self.comentario_id,
         'usuario': self.usuario_id,
         'voto': self.voto,
         'creado': self.creado.strftime('%d/%m/%Y %H:%m'),
         'actualizado': self.actualizado.strftime('%d/%m/%Y %H:%m')
      }
