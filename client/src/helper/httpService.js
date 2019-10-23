// Funciones estándar establecidas para realizar cualquier petición, create, delete, update, list, approved etc | sólo se fine una sóla vez.
export async function EntityCreate (endpoint, entity) { // endpoint (url - api) | entity (en caso que inserta datos)
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(entity),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return res.json();
  }
  catch (err) {
    return console.error(err);
  }
};

export async function EntityApproved (endpoint, id) {
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
