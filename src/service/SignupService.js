import singUp from './index'

export const sendOtpApi= async(queryData)=>{
     const res= singUp().post(`/send?to=${queryData}`);
     return res;


}
export const veryfyOtpApi =  async (data)=>{
     const res =  singUp().post(`/verifyOtp?otpData=${data}`);
     return res;
 
 }