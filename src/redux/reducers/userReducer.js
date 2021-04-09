import { types } from "../../constants/auth";

const initialState = {
  username: "",
  password: "",
  remember_me: "",
  product: "",
  loading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_ACTION: {
      return action.payload;
    }
    case types.LOGIN_ACTION_SUCCESS: {
      return { ...action.payload, loading: true };
    }
    case types.LOGIN_ACTION_FAILED: {
      return { state, error: action.payload };
    }

    case types.UPLOAD_PROFILE_ACTION_SUCCESS: {
      const newState = Object.assign({}, state, action.payload);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
