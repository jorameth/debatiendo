const baseUrl = 'http://127.0.0.1:8000'

export const getCookieValue = (name) => {
  const value = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)')
  return value ? value.pop() : null
}

export const fetchApp = (endpoint, options, onSuccess = (data) => {}, onError = (data) => {}) => {
  const csrftoken = getCookieValue('csrftoken'),
    init = options || {}

  init['credentials'] = 'include'
  init['mode'] = 'cors' || 'same-origin'
  init['cookies'] = { csrftoken: csrftoken }
  init['headers'] = {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'X-CSRFToken': csrftoken,
    'Access-Control-Allow-Origin': '*',
  }

  if (init.method === 'post' || init.method === 'put' || init.method === 'delete') {
    //init.data.csrftoken = csrftoken;
    if (!init.body) init.body = JSON.stringify(init.data)
    //init.data = {};
  }

  let searchParams = ''
  if (options.params) {
    searchParams = new URLSearchParams(options.params)
  }

  const url = `${baseUrl}${endpoint}${searchParams ? '/?' + searchParams.toString() : '/'}`

  fetch(url, init)
    .then((response) => {
      if (response.status == '403') {
        return { success: false, message: 'No tiene permiso para realizar esta acción.' }
      }
      return response.json()
    })
    .then((data) => (data.success ? onSuccess(data) : onError(data)))
}
