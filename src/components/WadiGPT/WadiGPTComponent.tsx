function WadiGPTComponent() {
  return (
    <iframe
      title="WadiGPT"
      className="iframe"
      src={`gpt.wadi.africa/wadigpt?token=${localStorage.getItem(
        "wadiKey"
      )}`}
    />
  );
}

export default WadiGPTComponent;
