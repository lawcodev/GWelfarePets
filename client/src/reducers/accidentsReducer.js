import { accidentConstants } from '../constants/accident.constants'
const initialState = {
  accidents: []
}
export default function accidents(state = initialState, action) {
  switch(action.type) {
    case accidentConstants.GETALL_ACCIDENTS_UNAPPROVED_SUCCESS:
      return {
        ...state,
        accidents: action.payload
      };
    case accidentConstants.GETALL_ACCIDENTS_APPROVED_SUCCESS:
      return {
        ...state,
        accidents: action.payload
      };
    case accidentConstants.APPROVED_ACCIDENT_SUCCESS:
      return {
        ...state,
        accidents: state.accidents.filter(accident => accident.idpetaccident !== action.payload)
      }
    case accidentConstants.RECHAZE_ACCIDENT_SUCCESS:
      return {
        ...state,
        accidents: state.accidents.filter(accident => accident.idpetaccident !== action.payload)
      }
    case accidentConstants.ADD_ACCIDENT_SUCCESS:
      return {
        ...state,
        accidents: [...state.accidents, action.payload]
      }
    default: 
      return state
  }
}