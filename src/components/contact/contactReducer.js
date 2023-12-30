export const SET_ACTIVE = 'SET_ACTIVE';
export const SET_INACTIVE = 'SET_INACTIVE';

const initialState = {
  name: false,
  email: false,
  message: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        [action.payload]: true,
      };
    case SET_INACTIVE:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
};

export default contactReducer;
