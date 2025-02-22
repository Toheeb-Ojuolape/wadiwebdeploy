function WadiGPTComponent() {
  return (
    <iframe
      title="WadiGPT"
      className="iframe"
      src={`https://gpt.wadi.africa/wadigpt?token=${localStorage.getItem(
        "wadiKey"
      )}`}
      allowFullScreen
    />
  );
}

export default WadiGPTComponent;
