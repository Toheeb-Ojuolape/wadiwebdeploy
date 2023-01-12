import { WadiButton } from "../buttons/wadiButton";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export const VerifyEmailComp = (props: any) => {
  const [cookies] = useCookies(["email"]);

  let domain = cookies.email.match(/@(.*)$/)[1];
  console.log({ domain: domain });
  const OnClick = () => {
  window.location.href = `https://${domain}`;

  };
  return (
    <>
      <WadiButton text="Open my email" OnClick = {OnClick} />
    </>
  );
};
