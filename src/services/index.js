import axios from "axios";
import "./axios-interceptors";
export const ROOT_URL = process.env.API_URL;

console.log("root url", process);

const API_CALL = (method, url, data, type, identifier, callback) => {
  let header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  if (callback) {
    axios({
      method,
      url: ROOT_URL + url,
      data,
      headers: header,
    }).then((response) => {
      return callback(response);
    });
  } else {
    return function (dispatch) {
      dispatch({
        type: type.REQ,
      });
      axios({
        method: method,
        url: ROOT_URL + url,
        data: data,
        headers: header,
      }).then((response) => {
        if (response.status === 500 || response.status === 400) {
          dispatch({
            type: type.FAIL,
            payload: response.data,
          });
        }
        dispatch({
          type: type.RES,
          payload: response,
        });
      });
    };
  }
};

export default API_CALL;
