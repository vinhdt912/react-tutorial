const loginAction = (user) => {
  return {
    type: "LOGIN_ACTION",
    payload: user,
  };
};

const submitProfileAction = (data) => {
  return {
    type: "SUBMIT_PROFILE_ACTION",
    payload: data,
  };
};

export { loginAction, submitProfileAction };
