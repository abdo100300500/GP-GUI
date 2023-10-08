import axios from "axios";

class AdminAPi{
    fetch = async(urls:string[])=>{
         const res = await axios.post("http://localhost:8080/api/v1/request_urls",{"urls":urls})
         console.log(res)
         return res;
    }
             
}

export default new AdminAPi();