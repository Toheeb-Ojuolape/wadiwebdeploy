import success from "../../../src/assets/success.gif";
import "./Misc.css";

function SuccessComponent(props: {id:string, title: string; description: string }) {
  return (
    <div id={props.id} className="success-component hidden-component">
      <div>
        <img src={success} width={"200px"} style={{margin:"auto"}} alt="success" />
        <h2 className="title">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default SuccessComponent;
