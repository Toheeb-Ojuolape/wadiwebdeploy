function WadiGPTComponent() {
  return (
    <iframe
      title="WadiGPT"
      className="iframe"
      src={`https://gpt.wadi.africa/wadigpt?token=${localStorage.getItem(
        "wadiKey"
      )}`}
      referrerPolicy={"unsafe-url"}
      sandbox={"allow-scripts"}
      seamless={true}
      allowFullScreen
    />
  );
}

export default WadiGPTComponent;
