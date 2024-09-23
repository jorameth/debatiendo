from django.contrib.auth.views import LoginView as AuthLoginView
from django.contrib.auth import login
from django.contrib.auth.models import User 

from django.http import JsonResponse


def get_json_errors(form):
    return {field: error for field, error in form.errors.items()}


def get_json_user(user):
    if isinstance(user, User) and user.is_authenticated:
        return  {
         'id': user.id,
         'name': user.get_full_name() or user.get_short_name() or user.username,
         'is_authenticated': True
        }
        
    else:
        return {}


class LoginView(AuthLoginView):
    
    def form_valid(self, form):
        login(self.request, form.get_user())

        user = self.request.user
        if user.is_authenticated:
            data = {
                'success': True,
                'usuario': get_json_user(user)                
            }
        else:
            data = {'success': False}

        return JsonResponse(data)

    def form_invalid(self, form):
        return JsonResponse({'success': False, 'errors': get_json_errors(form)})
    
    def get(self, request, *args, **kwargs):
        csrftoken = _add_new_csrf_cookie(request)
        return JsonResponse({'success': True, 'csrftoken': csrftoken})