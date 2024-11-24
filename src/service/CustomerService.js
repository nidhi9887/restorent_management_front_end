import customer from './index'


export const getAllMenuItemApi =  async ()=>{
    const res =  customer().get(`/getAllMenuItems`);
    return res;

}
