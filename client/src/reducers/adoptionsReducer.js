import { adoptionConstants } from '../constants/adoption.constants'
// Todo componente, debe de tener su estado de inicialización
const initialState = {
  adoptions: []
}
export default function adoptions(state = initialState, action) {
  switch(action.type) {
    case adoptionConstants.GETALL_ADOPTIONS_SUCCESS:
      return {
        ...state, // ...(se copia todo el estado de esta petición)
        adoptions: action.payload // payload, es lo que el store de redux, nos devuelve dependiendo de la acción que se dea.
      };
  case adoptionConstants.GETALL_ADOPTIONS_PETS_UNAPPROVED_TAKEN_SUCCESS:
    return {
      ...state, // ...(se copia todo el estado de esta petición)
      adoptions: action.payload // payload, es lo que el store de redux, nos devuelve dependiendo de la acción que se dea.
    };
    case adoptionConstants.ADDALL_ADOPTION_SUCCESS:
      return {
        ...state,
        adoptions: [...state.adoptions, action.payload]
      }
    default: 
      return state // en caso contrario de no realizar ninguna acción se devuelve el estado sea vacio o con data.
  }
}