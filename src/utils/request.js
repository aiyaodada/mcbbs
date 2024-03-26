import axios from 'axios';
import {Message} from 'element-ui';

//开发环境
let devUrl = 'http://localhost:8081';
//生产环境
let proUrl = 'http://localhost:8081';
let url = process.env.NODE_ENV === 'production' ?  proUrl : devUrl
const instance = axios.create({
    baseURL : url,
    timeout: 10000,
});

// 添加请求拦截器
instance.interceptors.request.use(
    async config => {
        if (config.url != "/sysUser/login"){
            config.headers['token'] = localStorage.getItem("token"); // 这里的token可以从localStorage或Vuex中获取
        }
        // config.headers['Content-Type'] = 'multipart/form-data'
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        // 在请求发送之前做些什么
        //这里设置了就不用在代码设置了如果有多个就写多个文件
        return config;
    },
    error => {
        Message.error('请求失败,请联系管理员!');
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        if (response.data.code === 200){
            // 对响应数据做些什么
            return response.data.data;
        }else{
            Message.error(response.data.msg);
        }
    },
    error => {
        // 对响应错误做些什么
        Message.error('响应失败,请联系管理员!');
        return Promise.reject(error);
    }
);

export default instance;