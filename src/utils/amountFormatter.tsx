export const formatAmount = (amount: number) => {
  return (
    "₦ " +
    parseFloat(parseFloat(amount.toString()).toFixed(2)).toLocaleString("en", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};
