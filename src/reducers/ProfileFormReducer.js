import {
  PROFILE_UPDATE,
  PROFILE_SET

} from '../actions/types';

const INITIAL_STATE = {
  name: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_UPDATE:
    //action.payload === { prop: 'name', value: 'jane'}
    return { ...state, [action.payload.prop]: action.payload.value };
    case PROFILE_SET:
    return state;
    default:
    return state;
  }
};
