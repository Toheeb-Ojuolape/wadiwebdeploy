import { ColorRing } from "react-loader-spinner";

export const Loading = (props: { loading: boolean }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: props.loading ? "100vh" : 0,
        width: props.loading ? "100%" : 0,
      }}
    >
      {
        <ColorRing
          visible={props.loading}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      }
    </div>
  );
};
