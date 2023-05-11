import axios from "axios"
import { Register } from "../Interface/RegisterInterface"


export const subscribeUser = async (user:Register) =>{
    // generate the access token then subscribe user
    const accessToken = await axios.get("https://wadi-api.herokuapp.com/generate-token")
    //subscribe the user
     axios({
            method:"POST",
            url:"https://wadi-api.herokuapp.com/subscribe-user",
            headers:{
                Authorization: "Zoho-oauthtoken "+accessToken.data.token
            },
            data:{
                "firstName":user.fullName.split(" ")[0],
                "email":user.email.replace("@","%40")
            }
        }).then(()=>{
            return
        }).catch((error)=>{
            return
        })
    }