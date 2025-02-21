function WadiGPTComponent() {
  return (
    <iframe
      title="WadiGPT"
      className="iframe"
      src={`https://www.gpt.wadi.africa/wadigpt?token=${localStorage.getItem(
        "wadiKey"
      )}`}
    />
  );
}

export default WadiGPTComponent;
