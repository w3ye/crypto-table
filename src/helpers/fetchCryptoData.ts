import axios from "axios";

export const fetchLatestCrypto = async () => {
  const response = await axios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      params: {
        start: 1,
        limit: 10,
      },
      headers: {
        "X-CMC_PRO_API_KEY": import.meta.env.VITE_COIN_MARKET_CAP_API_KEY,
      },
    }
  );
  return response.data.data;
};
