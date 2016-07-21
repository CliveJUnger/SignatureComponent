import { FORM_SIGNED } from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case FORM_SIGNED:
      return { ...state, signature: action.payload}
  }

  return state;
}
