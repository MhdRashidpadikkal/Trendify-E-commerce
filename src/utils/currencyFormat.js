
export const formatPriceInINR = (usd) => {
    const inr = usd * 83.5;
    return new Intl.NumberFormat("en-IN", {
      currency: "INR"
    }).format(inr);
  };
  