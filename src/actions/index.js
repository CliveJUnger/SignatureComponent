import {FORM_SIGNED} from './types';

export function passSignature(dataUri) {
  return {
    type: FORM_SIGNED,
    payload: dataUri
  }
}
