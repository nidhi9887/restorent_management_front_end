import singUp from './index'

export const sendOtpApi= async(queryData)=>{
     const res= singUp().post(`/send?to=${queryData}`);
     return res;


}