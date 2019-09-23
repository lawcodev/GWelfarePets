//Funciones comunes el cual se reusarán en las diferentes peticiones http, crear, actualizar, eliminar, listar
import decode from 'jwt-decode';

export async function EntityCreate (endpoint, entity) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(entity),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return res.json();
  }
  catch (err) {
    return console.error(err);
  }
};
// LOGIN DEL SISTEMA
export async function AUTHENTICATION_USER (endpoint, entity) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(entity),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      })
      //this.setToken(res.token) // Setting the token in localStorage
      return res.json()
  } catch (err) {
    return console.error(err);
  }
};

export async function AUTHENTICATION_USER_LOGGED_IN () {
  const token = this.getToken()
  return !!token && !this.isTokenExpired(token)
}

export async function AUTHENTICATION_IS_TOKEN_EXPIRED (token) {
  try {
    const decoded = decode(token)
    if (decoded.exp < Date.now() / 1000) {
      return true
    }
    else
      return false
  } catch (error) {
    console.error(error);    
  }
}

export async function AUTHENTICATION_SET_TOKEN (idToken) {
  localStorage.setItem('id_token', idToken)
}

export async function AUTHENTICATION_GET_TOKEN () {
  localStorage.getItem('id_token')
}

export async function AUTHENTICATION_LOGOUT () {
  localStorage.removeItem('id_token')
}

export async function AUTHENTICATION_GET_CONFIRM () {
  let answer = decode(this.getToken())
  return answer
}

export async function AUTHENTICATION_CHECK_STATUS (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
export async function EntityGetAll (endpoint) {
  try {
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (error) {
    return console.error(error)  
  }
}

export async function EntityGetById (endpoint, id) {
  try {
    const res = await fetch(endpoint, id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (error) {
    console.error(error);    
  }
}

export async function EntityDelete (endpoint, id) {
  try {
    const res = await fetch(endpoint, id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (error) {
    console.error(error)    
  }
}