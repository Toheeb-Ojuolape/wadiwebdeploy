import SendSampleProgress from "./SendSampleProgress";
import "./SendSample.css";
import SendSampleForm from "./SendSampleForm";
import { useEffect } from "react";
import { fetchEquiments } from "../../store/equipmentReducer";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { MyEquipments } from "../../Interface/equipmentInterface";
import SuccessComponent from "../Misc/SuccessComponent";
import { useState } from "react";

function SendSampleComponent() {
  const [progress, setProgress] = useState(20);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const equipments = useSelector(
    (state: MyEquipments) => state.equipments.value
  );
  useEffect(() => {
    dispatch(fetchEquiments());
  }, [dispatch]);

  const changeStep = () => {
    const sendSampleForm = document.getElementById("send-sample-form");
    const sendSampleSuccess = document.getElementById("send-sample-success");
    if (sendSampleForm && sendSampleSuccess) {
      sendSampleForm.style.display = "none";
      sendSampleSuccess.style.display = "block";
    }
  };
  return (
    <div className="container">
      <h2 className="text-2xl font-bold">SendSample</h2>
      <SendSampleProgress percentage={progress} />
      <SendSampleForm
        id={"send-sample-form"}
        setProgress={setProgress}
        equipments={equipments}
        changeStep={changeStep}
      />
      <SuccessComponent
        id={"send-sample-success"}
        title={"Transaction successful!"}
        description={
          "Your payment has been received and your request is currently being processed. Kindly check your inbox for a confirmation email from us"
        }
      />
    </div>
  );
}

export default SendSampleComponent;
