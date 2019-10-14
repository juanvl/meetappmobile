import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  loading: false,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });
    case '@auth/SIGN_IN_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@auth/SIGN_UP_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@auth/SIGN_UP_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
      });
    case '@auth/SIGN_FAILURE':
      return INITIAL_STATE;
    case '@auth/SIGN_OUT':
      return INITIAL_STATE;
    default:
      return state;
  }
}
