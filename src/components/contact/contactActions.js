import { SET_ACTIVE, SET_INACTIVE } from './contactReducer';

export const setActive = (field) => ({
  type: SET_ACTIVE,
  payload: field,
});

export const setInactive = (field) => ({
  type: SET_INACTIVE,
  payload: field,
});
