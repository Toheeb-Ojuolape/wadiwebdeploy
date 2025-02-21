function WadiGPTComponent() {
  return (
    <iframe
      title="WadiGPT"
      className="iframe"
      src={`https://chat.wadi.africa/wadigpt?token=${localStorage.getItem(
        "wadiKey"
      )}`}
    />
  );
}

export default WadiGPTComponent;
