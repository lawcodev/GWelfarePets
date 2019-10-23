import { userConstants } from '../constants/user.constants'
// Todo componente, debe de tener su estado de inicialización
const initialState = {
  users: []
}
export default function users(state = initialState, action) {
  switch(action.type) {
    case userConstants.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default: 
      return state // en caso contrario de no realizar ninguna acción se devuelve el estado sea vacio o con data.
  }
}