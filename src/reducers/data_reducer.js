import { FORM_SIGNED } from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case FORM_SIGNED:
      return { ...state, pdf: action.payload}
  }

  return state;
}
