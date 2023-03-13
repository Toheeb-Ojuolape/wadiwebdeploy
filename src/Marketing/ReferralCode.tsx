import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { db } from "../db";
import { collection, query, where, getDocs } from "firebase/firestore";

const ReferralCode = () => {
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [referee, setReferees] = useState([]);

  const checkNumber = async () => {
    setLoading(true);
    let array: any = [];
    const userRef = collection(db, "users");
    const q = query(userRef, where("referralCode", "==", referralCode));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
    });
    setReferees(array);
    setLoading(false);
  };

  return (
    <div
      className="pt-12 p-5 flex justify-center bg-white"
      style={{ height: "100vh" }}
    >
      <div>
        <div>
          <h2 className="font-bold text-center">
            Check Number of people referred by Ambassadors
          </h2>
          <div className="my-3">
            <label>Enter Referral code</label>
            <Input onChange={(e) => setReferralCode(e.target.value)} />

            <Button
              isLoading={loading}
              onClick={checkNumber}
              bgColor={"#1c4399"}
              variant={"solid"}
              color={"white"}
              className="my-3"
              width={"100%"}
            >
              Check
            </Button>

            {referee && <p className="text-center">{referee.length} referred</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReferralCode;
