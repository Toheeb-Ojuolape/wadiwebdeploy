import axios from "axios";
import { Project } from "../../Interface/ProjectInterface";
import SendPublishitEmail from "./templates/SendPublishitEmail";

function sendPublishItEmail(title:string,payload: Project) {
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
      template: SendPublishitEmail(payload),
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default sendPublishItEmail
