import {config} from "../config/config";
import {promisic} from "./utils"
class Http{
    static async request({url,method="GET",data}){
     const res= await promisic(wx.request)({
          url:config.apiBaseUrl+url,
          method,
          data,
          header: {
              appkey: config.appkey
          },
      })
        return res.data;

    };
}
export {
    Http
}