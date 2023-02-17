import axios from "axios";
//we created this function to reuse the http request 
export const commonRequest = async (method, url, body, header) => {
  let config = {
    method,
    url,
    headers: header
      ? header
      : {
          "Content-Type": "application/json",
        },
    data: body,
  };
  //creating axios instance
  return axios(config)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err.message;
    });
};
