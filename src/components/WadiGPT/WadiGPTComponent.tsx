function WadiGPTComponent() {
  return (
    <iframe
      title="WadiGPT"
      className="iframe"
      src={`${process.env.REACT_APP_AI_URL}/wadigpt?token=${localStorage.getItem(
        "wadiKey"
      )}`}
    />
  );
}

export default WadiGPTComponent;
