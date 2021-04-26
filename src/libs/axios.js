import axios from "axios";
import store from "@/store";
import { encode, getToken, getCookie, getDigest } from "./util";
import Vue from "vue";
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
// import { Spin } from 'iview'
const addErrorLog = errorInfo => {
  const {
    statusText,
    status,
    request: { responseURL }
  } = errorInfo;
  let info = {
    type: "ajax",
    code: status,
    mes: statusText,
    url: responseURL
  };
  if (!responseURL.includes("save_error_logger"))
    store.dispatch("addErrorLog", info);
};

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      xsrfCookieName: "AUTH_TOKEN", // default: XSRF-TOKEN
      xsrfHeaderName: "AUTH_TOKEN", // default: X-XSRF-TOKEN
      headers: {
        // Cookie:'AUTH_TOKEN=' + getCookie('AUTH_TOKEN') ,//+ ';path=/;httpOnly=true',
        Authorization: getDigest(),
        "Content-type": "application/x-www-form-urlencoded",
        AUTH_TOKEN: getCookie("AUTH_TOKEN")
      },
      withCredentials: true
    };
    return config;
  }
  destroy(url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        // 添加全局的loading...
        if (!Object.keys(this.queue).length) {
          // Spin.show() // 不建议开启，因为界面不友好
        }
        this.queue[url] = true;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        this.destroy(url);
        const { data, status } = res;
        if (!window.isLogout && data && data.code === "10004") {
          window.isLogout = true;
          alert("当前登录会话已超时，请重新登录！");
          window.location.reload();
        }
        // setCookie('AUTH_TOKEN', data.data.code)
        return { data, status };
      },
      error => {
        this.destroy(url);
        console.log(error, "errorInfo");
        addErrorLog(error.response);
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create();
    if (!options.data) {
      options.data = {};
    }
    options.data.token = getToken();
    const para = encode(JSON.stringify(options.data));
    options.data = "para=" + para;
    if (options.method === "get" || options.method === "GET") {
      options.params = { para: para };
    }
    if (options.url.indexOf("?") > 0) {
      options.url += "&_t=" + new Date().getTime();
    } else {
      options.url += "?_t=" + new Date().getTime();
    }
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
