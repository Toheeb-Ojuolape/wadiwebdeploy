import { Project } from "../../../Interface/ProjectInterface";


function SendPublishitEmail(payload: Project) {
  return `<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.cdnfonts.com/css/product-sans" rel="stylesheet" />
    <title>Your SendSample request has been received, ${payload.name}</title>
    <style type="text/css">
      .body {
        background: #ecfaff;
        font-family: "Product Sans", sans-serif;
      }
  
      .container {
        max-width: 500px;
        margin: 30px auto 90px auto;
        padding: 40px 20px;
        background: white
      }
  
      .brandcolor {
        color: #1e90ff
      }
  
      .footer {
        height: 1px;
        background: #1e90ff;
        width: 100%;
        margin:10px 0px
      }
  
      .paragraph {
        padding: 9px 0px
      }
  
      .button{
        background:#1e90ff;
        max-width: 200px;
        width:100%;
        padding:16px;
        color:white;
        border:0px;
        border-radius:8px;
        cursor: pointer;
      }
  
      .call-to-action{
        text-align:center;
        margin:19px 0px
      }
  
      .link{
        cursor: pointer !important;
        margin:29px 0px 34px 0px;
        font-size:14px
      }

      .logo{
        margin:10px 0px;
        background:white
      }

      .text-center{
        text-align:center;
        font-weight:600;
        font-size:13px
      }
    </style>
  </head>
  
  <body class="body">
    <div class="container">
    <div class="logo">
     <h2 class="text-center">Wadi</h2>
    </div>
      <h2>Manuscript review request received<span class="brandcolor">, ${payload.name}</span></h2>
      <p class="paragraph">
        We just received your PublishIT review request with the following details
        <ul>
          <li>Title: ${payload.title}</li>
          <li>Intended Journal: ${payload.journal}</li>
          <li>Field: ${payload.field}</li>
          <li>Review type: ${payload.type}</li>
        </ul>

        <p>You will receive a follow-up email once we have found a manuscript reviewer from our database to work on your project</p>
  
        <div class="call-to-action">
          <p>If you have any complaints, kindly tap the button to contact support:</p>
          <div class="link">
          <a href="mailto:hello@wadi.africa"><button class="button">Contact us</button></a>
          </div>
        </div>
  
      <div class="footer">
      </div>
  
      <p>Best Regards <br /> The Wadi team</p>
    </div>
  </body>
  `;
}

export default SendPublishitEmail;
