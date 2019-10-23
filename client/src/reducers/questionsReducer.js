import { questionsConstants } from '../constants/question.constants'
const initialState = {
  questions: []
}
export default function questions(state = initialState, action) {
  switch(action.type) {
    case questionsConstants.GETALL_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload
      };
    default: 
      return state
  }
}