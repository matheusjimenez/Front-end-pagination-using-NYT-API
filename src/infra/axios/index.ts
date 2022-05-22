import axios from "axios";

function Get<T>(url: string){
    return axios.get<T>(url+`api-key=${import.meta.env.VITE_NYT_KEY}`);
}

export { Get };