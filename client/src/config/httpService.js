//Funciones comunes el cual se reusarán en las diferentes peticiones http, crear, actualizar, eliminar, listar
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

export async function AUTHENTICATION_GET_TOKEN () {
  return JSON.parse(localStorage.getItem('id_token'))
}

export async function AUTHENTICATION_LOGOUT () {
 localStorage.removeItem('id_token')
 localStorage.removeItem('auth')
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