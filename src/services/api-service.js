import axios from "axios";

export async function post(url, data) {
  const message = await axios({
    method: "post",
    url: url,
    data: data,
  })
    .then((response) => {
      return {
        type: "SUCCESS",
        payload: response.data,
      };
    })
    .catch((error) => {
      const str = error.response.data.error;
      const strToArr = str.split("");
      const index = strToArr.lastIndexOf(":");
      const errorText = str.slice(index + 2);
      return {
        type: "ERROR",
        payload: errorText,
      };
    });
  return message;
}
