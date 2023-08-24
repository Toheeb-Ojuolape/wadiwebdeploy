import axios from "axios";
import { SendSampleProject } from "../../Interface/equipmentInterface";
import SendSampleEmail from "./templates/SendSampleEmail";

function sendEmailToClient(title:string,payload: SendSampleProject) {
  axios({
    method: "POST",
    url: process.env.REACT_APP_API_URL + "/mail",
    headers: {
      "Content-type": "application/json",
    },
    data: {
      email: payload.email + ",wadiafrica@gmail.com",
      replyTo: "wadiafrica@gmail.com",
      title: title,
      template: SendSampleEmail(payload),
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default sendEmailToClient;
