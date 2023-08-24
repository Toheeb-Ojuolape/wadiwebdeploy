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
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../db";
import slugify from "slugify";
import { minDate } from "../../utils/dateFormatter";
import sendEmailToClient from "../../utils/emails/sendEmailToClient";
import { SendSampleProject } from "../../Interface/equipmentInterface";
import Swal from "sweetalert2";

function SendSampleForm(props: {
  id: string;
  setProgress: Function;
  changeStep: Function;
  equipments: Array<{ name: string; price: number }>;
}) {
  const [test, setTest] = useState("");
  const [address, setAddress] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [equipment, setEquipment] = useState(0);
  const [samples, setSamples] = useState(0);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: MyUser) => state.user.value);
  const setSample = (sample: number) => {
    setSamples(sample);
  };

  const bookEquipment = () => {
    setLoading(true);
    document.getElementById("flutterwave")?.querySelector("button")?.click();
    setTimeout(() => setLoading(false), 2000);
  };

  if (!process.env.REACT_APP_FLUTTERWAVE_TEST_KEY) {
    throw new Error("set your flutterwave pub key");
  }

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_TEST_KEY,
    tx_ref: transactionRef(),
    amount: props.equipments && props.equipments[equipment].price * samples,
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
    text: "Send Request",
    callback: (response: any) => {
      console.log(response);
      setLoading(true);
      if (response.status === "successful") {
        //change the step of the project to next step
        //increase the percentage
        //post request to firebase db
        const slug = slugify(test + "-" + user.firstName, {
          replacement: "-",
          lower: true,
          remove: /[$*_+~.()'"!?\-:@]/g,
        });

        const payload: SendSampleProject = {
          name: user.firstName,
          email: user.email,
          test: test,
          samples: samples,
          address: address,
          pickupDate: pickupDate,
          deliveryDate: deliveryDate,
          equipment: props.equipments && props.equipments[equipment].name,
          amount:
            props.equipments && props.equipments[equipment].price * samples,
        };
        const title =
          "Your SendSample request has been received!, " + payload.name;
        const docRef = doc(db, "requests", slug);
        setDoc(docRef, payload).then(() => {
          try {
            window.scrollTo(0, 0);
            sendEmailToClient(title, payload);
            props.setProgress(100);
            props.changeStep();
            setLoading(false);
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Something went wrong",
              text: "We encountered an error while sending an email to you. Kindly email our admin with the button below",
              confirmButtonText: "Email us",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "mailto:hello@wadi.africa";
              }
            });
          }
        });
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      console.log("payment closed");
    },
  };

  return (
    <div id={props.id} className="sendSampleForm">
      <div>
        <form>
          <label>Type of Test</label>
          <Input
            onChange={(e) => setTest(e.target.value)}
            placeholder={"What type of test is this?"}
          />
        </form>
      </div>
      <div>
        <label>Select equipment</label>
        <Select onChange={(e) => setEquipment(Number(e.target.value))}>
          {props.equipments &&
            props.equipments.map((equipment, i) => (
              <option key={i} value={i}>
                {equipment.name}
              </option>
            ))}
        </Select>
      </div>

      <div>
        <label>Pickup address</label>
        <Input
          onChange={(e) => setAddress(e.target.value)}
          placeholder={"Where should we pickup your sample?"}
        />
        <span className="helperText">
          most preferrably your university's address
        </span>
      </div>

      <div className="lg:flex">
        <div className="pr-3">
          <label>Pick-up date</label>
          <Input
            min={minDate()}
            onChange={(e) => setPickupDate(e.target.value)}
            type="date"
          />
          <span className="helperText">date we pickup your samples</span>
        </div>
        <div>
          <label>Delivery date</label>
          <Input
            onChange={(e) => setDeliveryDate(e.target.value)}
            type="date"
          />
          <span className="helperText">
            date you need the results of your analysis
          </span>
        </div>
      </div>

      <div>
        <label>Number of Samples</label>
        <SampleCounter setSample={setSample} />
      </div>

      {props.equipments && props.equipments[equipment].price * samples > 0 && (
        <div>
          <h2 className="text-center text-3xl font-bold">
            {formatAmount(props.equipments[equipment].price * samples)}
          </h2>
        </div>
      )}

      {props.equipments && props.equipments[equipment].price * samples > 0 && (
        <div>
          <PrimaryButton loading={loading} onClick={bookEquipment}>
            Book
          </PrimaryButton>
        </div>
      )}

      <div style={{ display: "none" }} id="flutterwave">
        <FlutterWaveButton {...fwConfig} />
      </div>
    </div>
  );
}

export default SendSampleForm;
