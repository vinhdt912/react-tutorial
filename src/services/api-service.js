import axios from "axios";

const postAction = async (url, data) => {
  const handleSuccess = (response) => {
    const newData = {
      username: data.username,
      password: data.password,
      remember_me: data.remember_me,
      product: data.product,
      uuid: response.data.uuid,
      phone_number: response.data.phone_number,
    };
    console.log(response);
    return newData;
  };
  const handleError = (error) => {
    const errorString = error.response.data.error;
    const errorMessage = errorString.substring(
      errorString.lastIndexOf(":") + 2
    );
    return errorMessage;
  };

  const response = await axios({
    method: "post",
    url: url,
    data: data,
  })
    .then((response) => handleSuccess(response))
    .catch((error) => handleError(error));

  return response;
};

const putAction = async (url, data) => {
  const handleSuccess = (response) => {
    console.log("SUCCESS, response: ", response);
  };
  const handleError = (error) => {
    console.log(error);
  };

  const response = await axios({
    method: "put",
    url: url,
    data: data,
  })
    .then((response) => handleSuccess(response))
    .catch((error) => handleError(error));

  return response;
};

export { postAction, putAction };
