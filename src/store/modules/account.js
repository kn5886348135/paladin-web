import { Register, Login, Logout } from "@/api/account";
import Cookies from "js-cookie";

const state = {
  token: "" || Cookies.get("token"),
  username: "" || Cookies.get("username"),
};

const getters = {};

const mutations = {
  SET_TOKEN(state, value) {
    state.token = value;
  },
  SET_USERNAME(state, value) {
    state.username = value;
  },
  REMOVE_TOKEN(state) {
    state.token = "";
  },
  REMOVE_USERNAME(state) {
    state.username = "";
  },
};

const actions = {
  registerAction(context, params) {
    console.log("register action");
    return new Promise((resolve, reject) => {
      Register(params)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  LoginAction(context, params) {
    return new Promise((resolve, reject) => {
      Login(params)
        .then((res) => {
          context.commit("SET_TOKEN", res.data.token);
          context.commit("SET_USERNAME", res.data.username);
          Cookies.set("token", res.data.token);
          Cookies.set("username", res.data.username);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  LogoutAction(context, params) {
    return new Promise((resolve, reject) => {
      Logout(params)
        .then((res) => {
          context.commit("REMOVE_TOKEN", res.data.token);
          context.commit("REMOVE_USERNAME", res.data.username);
          Cookies.remove("token", res.data.token);
          Cookies.remove("username", res.data.username);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
