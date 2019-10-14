import { produce } from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    case '@auth/SIGN_FAILURE':
      return INITIAL_STATE;
    case '@auth/SIGN_OUT':
      return INITIAL_STATE;
    case '@user/UPDATE_PROFILE_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.data;
      });
    default:
      return state;
  }
}
