import decode from 'jwt-decode';
import { FAILED_AUTHORIZATION, NOT_FOUND } from './config'
export default class AuthService {
  
  constructor(endPoint) {
    this.endPoint = endPoint
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
    this.getAuthorization = this.getAuthorization.bind(this)
    this.setAuthorization = this.setAuthorization.bind(this)
    this.authorization = this.authorization.bind(this)
    this.auth = false
  }
  async login(endPoint, username, password) {
    const res = await this.fetch(endPoint, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      })
    });
    this.setAuthorization(res.authorization ? 1: 0)
    this.setToken(res.token)
    return Promise.resolve(res)
  }
  loggedIn() {
    const token = this.getToken()
    return !!token && !this.isTokenExpired(token) 
  }
  setAuthorization(name) {
    localStorage.setItem('auth', name)
  }
  getAuthorization() {
    return localStorage.getItem('auth')
  }
  authorization() {
    const auth = this.getAuthorization()
    return auth
  }
  removeAuthorization() {
    localStorage.removeItem('auth');
  }
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return (decoded.exp < Date.now() / 1000)? true: false
    }
    catch (err) {
      return false;
    }
  }
  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }
  getToken() {
    return localStorage.getItem('id_token')
  }
  logout() {
    localStorage.removeItem('id_token');
  }
  getProfile() {
    return decode(this.getToken());
  }
  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if (this.loggedIn()) {
      headers['x-access-token'] = this.getToken()
    }
    return fetch(url, {
      headers,
      ...options
    })
    .then(this._checkStatus)
    .then(response => response.json())
  }
  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      if (response.status === 404) {
        let notfound = `${NOT_FOUND}`
        throw notfound
      } else if (response.status === 401) {
        let failedAuthorization = `${FAILED_AUTHORIZATION}`
        throw failedAuthorization
      }
    }
  }
}