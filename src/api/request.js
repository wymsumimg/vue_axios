import axios from './config'
// import {getType} from '@/utils'
import {TokenKeys} from '@/utils/variable'
import { Message } from 'element-ui';
import router from '@/router'
import CusBase64 from '../utils/base64'
// 请求拦截
axios.interceptors.request.use(function (config) {
  // config.headers["Content-Type"]="application/json";
  let tokenHeader = "ybmars:" + localStorage.getItem(TokenKeys.memberToken);
  var _authtoken = CusBase64.CusBASE64.encoder(tokenHeader);
  config.headers['Authorization'] = "Basic " + _authtoken ;
//   config.headers[TokenKeys.language] = localStorage.getItem('lang');//加语言请求头字符串
  
  return config
}, function (error) {
  return Promise.reject(error);
});

var ifshow=false;

// 响应拦截
axios.interceptors.response.use(function (response) {
  
  let res = response.data;
//   if( getType(res)== 'object'){
     if (res.ReturnCode != 200) {
      // if (localStorage.getItem(TokenKeys.memberToken)) {
        if(res.ReturnCode == 404 ){
          if(ifshow==false){
            // 
                Message.error(res.ErrorMessage);
                ifshow=true;
              }

              window.setTimeout(function(){
                ifshow=false;
              },1000);

        }
        if(res.ReturnCode == 401){

              if(ifshow==false){
                // 授权失败
                 Message.error(res.ErrorMessage);
                 ifshow=true;
              }

              window.setTimeout(function(){
                ifshow=false;
              },1000);

          router.push({path:'/login'});
        }else{
              //当请求地址是组员列表的时候，没有数据的情况不需要弹错误框提示
              if(response.config.url!=response.config.baseURL+'Area/GetGroupUserList'){
                  Message.error(res.ErrorMessage)
              }
        }
        
    } else {
      // Message.error(res.ErrorMessage);
    }
//   }
  return res;
}, function (response) {

  return response;
}, function (error) {
  return Promise.reject(error);
});
export default axios
