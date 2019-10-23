import { breedConstants } from '../constants/breed.constants'
const initialState = {
  breeds: []
}
export default function breeds(state = initialState, action) {
  switch(action.type) {
    case breedConstants.GETALL_BREEDS_SUCCESS:
      return {
        ...state,
        breeds: action.payload
      };
    default: 
      return state
  }
}