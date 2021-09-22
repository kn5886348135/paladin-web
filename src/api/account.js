import service from "../utils/request";

export function GetCode(params) {
  console.log(params);
  return service.request({
    method: "get",
    url: `${process.env.VUE_APP_API}/account/code`,
    params,
  });
}

export function Register(params) {
  console.log("register request");
  return service.request({
    method: "post",
    url: `${process.env.VUE_APP_API}/account/register`,
    data: params,
  });
}

export function Login(params) {
  return service.request({
    method: "post",
    url: `${process.env.VUE_APP_API_WEB}/account/login`,
    data: params,
  });
}

export function Logout(params) {
  return service.request({
    method: "post",
    url: `${process.env.VUE_APP_API_WEB}/account/logout`,
    params,
  });
}
