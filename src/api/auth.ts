import axios from "axios";


export const loginApi = async (username: string, password: string) => {
    try{
        const response = await axios.post("/api/login", { username, password });
        return response.data;
    }catch(error){
        console.log("Login failed",error);
    }
};

export const logoutApi = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
}

