import { axiosInstance } from "../config/axiosInstance";

export const networkServis={
    getAll: async (url) => {

        let resultData = [];
        //ilk önce datayı çek sonra eşitle
        await axiosInstance.get(url)
            .then(res => {
                resultData = res.data;
            })
            .catch((err)=>{
                throw err
            });
        return resultData;
    },
    getById: async (url,id)=>{
        let resultData = {};
        await axiosInstance.get(url+'/'+id)
        .then(res=>resultData=res.data).catch((err)=>{throw err})
        
     console.log(resultData)
    return resultData;
    },
    add: async (url, data) => {

        let resultData = {};
        await axiosInstance.post(url, data)
            .then(res => {
                resultData = res.data;
            })
            .catch((err)=>{
                throw err
            })


        return resultData;
},
update: async (url, data, id) => {

    let responseData = {};

    await axiosInstance.put(url + '/' + id, data)
        .then(res => {
            responseData = res.data;
        })

    return responseData;

},
    delete:async (url,id)=>{
     await axiosInstance.delete(url+'/'+id)
     .then(res=>res.data).catch((err)=>{throw err})
        
    }
}