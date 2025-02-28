function WadiGPTComponent() {
  return (
    <iframe
      title="WadiGPT"
      className="iframe"
      src={`https://gpt.wadi.africa/wadigpt`}
      referrerPolicy={"unsafe-url"}
      sandbox={"allow-scripts"}
      seamless={true}
      allowFullScreen
    />
  );
}

export default WadiGPTComponent;