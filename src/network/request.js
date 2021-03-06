import axios from "axios";
import { resolve } from "path";
import { rejects } from "assert";

export function request(config) {
  // 创建axios实例 
  const instance = axios.create({
    baseURL: "http://106.54.54.237:8000/api/v1",
    // timeout: 5000
  })
  // 2.1、axios拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  // 2.2、响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);    
  })
  // 2.3、发送真正的网络请求
  return instance(config)
};