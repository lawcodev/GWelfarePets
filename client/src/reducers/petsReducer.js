import { petConstants } from '../constants/pet.constants'
// Todo componente, debe de tener su estado de inicialización
const initialState = {
  pets: []
}
export default function pets(state = initialState, action) {
  switch(action.type) {
    case petConstants.GETALL_PETS_SUCCESS:
      return {
        ...state, // ...(se copia todo el estado de esta petición)
        pets: action.payload // payload, es lo que el store de redux, nos devuelve dependiendo de la acción que se dea.
      };
    case petConstants.DELETE_PET_SUCCESS:
      return {
        ...state,
        pets: state.pets.filter(pet => pet.idpet !== action.payload)
      }
    case petConstants.GETBYID_PET_SUCCESS:
      return {
        ...state,
        pet: action.payload
      }
    case petConstants.ADD_PET_SUCCESS:
      return {
        ...state,
        pets: [...state.pets, action.payload]
      }
    default: 
      return state // en caso contrario de no realizar ninguna acción se devuelve el estado sea vacio o con data.
  }
}