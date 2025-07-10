import axios from "axios";

export const getPumpDataApi = async () => {
    try{
        const response = await axios.get("/api/pumpData");
        return response.data;
    }catch(error){
        console.log("Get pump data failed",error);
    }
};