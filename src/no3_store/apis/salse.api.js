import axios from "axios";



export const salseAllGetapi = async () =>{
    try{
        const response = await axios.get("http://localhost:3001/sales");
        return response.data
    }catch(error){
        return new Error(error);
    }
}

export const salseGetapi = async (id) =>{
    try{
        const response = await axios.get(`http://localhost:3001/sales/${id}`);
        return response.data
    }catch(error){
        return new Error(error);
    }
}

export const salsePostApi = async (dataObj) =>{
    try{
        const response = await axios.post("http://localhost:3001/sales", dataObj);
        return response.data
    }catch(error){
        return new Error(error);
    }
}

export const salsePutApi = async (dataObj) =>{
    try{
        const response = await axios.put(`http://localhost:3001/sales/${dataObj.id}`, dataObj);
        return response.data
    }catch(error){
        return new Error(error);
    }
}

export const salseDeleteApi = async (id) =>{
    try{
        await axios.delete(`http://localhost:3001/sales/${id}`);
        return id;
    }catch(error){
        return new Error(error);
    }
}