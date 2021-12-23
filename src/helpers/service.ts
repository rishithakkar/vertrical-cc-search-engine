import axios from "axios";

export const BASE_URL = "http://localhost:5555/";
const GENERAL_ERROR = new Error("Whoops, something went wrong! Please try again");

export function get(url: String): any {
  return new Promise((resolve, reject) => {
    let headers = {
      "Content-Type": "application/json",
      "seceret-key": "f9bf78b9a18ce6d46a0cd2b0b86df9da",
    };

    const config: any = {
      method: "get",
      baseURL: BASE_URL,
      url: url, // must be absolute
      headers: headers,
      timeout: 3000,
    };

    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          resolve(data);
        }
        reject({
          error: true,
          data: null,
          message: GENERAL_ERROR,
        });
      })
      .catch(({ request, response, message }) => {
        if (request) {
          // The request was made but no response was received, `error.request`
          const { response } = request;
          reject({
            error: true,
            data: null,
            message: response,
          });
        } else if (response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          const { data } = response;
          reject({
            error: true,
            data: data,
            message: response,
          });
        } else {
          console.error(message);
          reject({
            error: true,
            data: null,
            message: GENERAL_ERROR,
          });
        }
      })
      .then(() => {
        // it will always executed
      });
  });
}
