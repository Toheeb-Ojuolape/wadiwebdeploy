import { Input, Select } from "@chakra-ui/react";
import PrimaryButton from "../Misc/Buttons/PrimaryButton";
import SampleCounter from "../Misc/SampleCounter/SampleCounter";
import { useState } from "react";
import { formatAmount } from "../../utils/amountFormatter";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useSelector } from "react-redux";
import { MyUser } from "../../Interface/UserInferface";
import { transactionRef } from "../../utils/flutterwaveConfig";
import { WADILOGO } from "../../constants/constants";

function SendSampleForm() {
  const [equipment] = useState(90);
  const [samples, setSamples] = useState(0);
  const user = useSelector((state: MyUser) => state.user.value);
  const setSample = (sample: number) => {
    setSamples(sample);
  };

  const bookEquipment = () => {
    document.getElementById("flutterwave")?.click();
  };

  const config = {
    public_key: "FLWPUBK-213ca97a288c0e26a38121855659ad4b-X",
    tx_ref: transactionRef(),
    amount: equipment * samples,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user.email,
      phone_number: "08121172330",
      name: user.firstName || "",
    },
    customizations: {
      title: "Wadi",
      description: "Payment for items in cart",
      logo: WADILOGO,
    },
  };

  const fwConfig = {
    ...config,
    text: "Book",
    callback: (response: any) => {
      console.log(response);
      if (response.status === "completed") {
        //change the step of the project to next step
        console.log("ha");
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      console.log("payment closed");
    },
  };

  return (
    <div className="sendSampleForm">
      <div>
        <form>
          <label>Type of Test</label>
          <Input placeholder={"What type of test is this?"} />
        </form>
      </div>
      <div>
        <label>Select equipment</label>
        <Select>
          <option>Fill equipment</option>
        </Select>
      </div>

      <div>
        <label>Pickup address</label>
        <Input placeholder={"Where should we pickup your sample?"} />
      </div>

      <div className="lg:flex">
        <div className="pr-3">
          <label>Pick-up date</label>
          <Input type="date" />
          <span className="helperText">date we pickup your samples</span>
        </div>
        <div>
          <label>Delivery date</label>
          <Input type="date" />
          <span className="helperText">
            date you need the results of your analysis
          </span>
        </div>
      </div>

      <div>
        <label>Number of Samples</label>
        <SampleCounter setSample={setSample} />
      </div>

      {equipment * samples > 0 && (
        <div>
          <h2 className="text-center text-3xl font-bold">
            {formatAmount(equipment * samples)}
          </h2>
        </div>
      )}

      {equipment * samples > 0 && (
        <div>
          <PrimaryButton onClick={bookEquipment}>
            <div id="flutterwave">
              <FlutterWaveButton {...fwConfig} />
            </div>
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}

export default SendSampleForm;
