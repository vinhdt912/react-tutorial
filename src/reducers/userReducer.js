const initialState = {
  username: "",
  password: "",
  remember_me: "",
  product: "",
  uuid: "",
  phone_number: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ACTION": {
      return action.payload;
    }
    case "SUBMIT_PROFILE_ACTION": {
      const newState = Object.assign(state, action.payload);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
