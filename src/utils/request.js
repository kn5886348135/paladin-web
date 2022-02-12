import axios from "axios";
import Cookies from "js-cookie";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: "",
  timeout: 5000,
});

service.interceptors.request.use(
  function (config) {
    config.headers["Token"] = Cookies.get("admin");
    config.headers["Username"] = Cookies.get("username");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function (res) {
    if (res.status !== 200) {
      Message.error(res.data.message);
      return Promise.reject(res);
    } else {
      return res;
    }
  },
  function (error) {
    alert(error.message);
    return Promise.reject(error);
  }
);

export default service;
