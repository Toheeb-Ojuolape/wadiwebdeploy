import { Button, Input } from "@chakra-ui/react";



const ReferralCode = () => {
 
  return (
    <div
    className="pt-12 p-5 flex justify-center bg-white" 
    style={{"height":"100vh"}}
    >

        <div>
            <div>
             <h2 className="font-bold text-center">Check Number of people referred by Ambassadors</h2>
             <div className="my-3">
             <label>Enter Referral code</label>
             <Input />

             <Button bgColor={"#1c4399"} variant={"solid"} color={"white"} className="my-3" width={"100%"}>Check</Button>
             </div>
             </div>
        </div>
      
    
    </div>
  );
};
export default ReferralCode;
