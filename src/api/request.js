import 'whatwg-fetch'
import { isObject } from 'lodash'

function parseJSON(response) {
  return response.json()
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response // simply return response
  }

  // return error response
  return response.json().then((jsonResponse) => {
    const error = new Error(response.statusText)
    error.res = jsonResponse || {} // fallback if no response
    throw error
  })
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  const headers = {}
  const fetchOptions = { ...options }

  if (isObject(options.body)) {
    fetchOptions.body = JSON.stringify(options.body)
    headers['Content-Type'] = 'application/json'
  } else if (options.file) {
    fetchOptions.body = options.file
  }

  fetchOptions.headers = new Headers(headers)

  return fetch(url, fetchOptions)
    .then(checkStatus)
    .then((res) => {
      if (res.status === 204) { // 204 No Content fix
        return null
      }

      return parseJSON(res)
    })
}
