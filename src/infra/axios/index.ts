import axios from "axios";

async function Get(url: string){
    let data;
    await axios.get(url+`api-key=${import.meta.env.VITE_NYT_KEY}`).then(response =>{
        data = response;
    });

    return data;
}

export { Get };