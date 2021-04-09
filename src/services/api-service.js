import axios from "axios";

const postServiceAction = async (url, data) => {
  const handleSuccess = (response) => {
    return response;
  };
  const handleError = (error) => {
    // const errorString = error.response.data.error;
    // const errorMessage = errorString.substring(errorString.lastIndexOf(":") + 2);
    return error;
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

export { postServiceAction, putAction };
