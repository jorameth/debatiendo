from json import loads
from django.http import QueryDict
from django.utils.deprecation import MiddlewareMixin
from django.middleware.csrf import CsrfViewMiddleware, get_token


class LocalMiddleware(MiddlewareMixin):
    """
    Handle conditional GET operations. If the response has an ETag or
    Last-Modified header and the request has If-None-Match or If-Modified-Since,
    replace the response with HttpNotModified. Add an ETag header if needed.
    """


    def process_request(self, request):

        if not hasattr(request, 'is_ajax'):
            is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
            is_ajax = is_ajax or request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'

            setattr(request, 'is_ajax', is_ajax)
            try:
                if is_ajax and bool(request.body):
                    try:
                        params = loads(request.body.decode('utf-8'))
                        data = request.POST.copy()
                        for key, value in params.items():
                            data.setdefault(key, value)
                        setattr(request, 'POST', data)
                        # request.POST = QueryDict(request.body)
                    except Exception as e:
                        print(e)
            except Exception as e:
                print(e)
