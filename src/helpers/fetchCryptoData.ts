import axios from "axios";
import { LatestListingResponse } from "../types/response";

export const fetchLatestCrypto = async (
  start: number = 1
): Promise<LatestListingResponse[]> => {
  const response = await axios.get("/api/v1/cryptocurrency/listings/latest", {
    params: {
      start,
      limit: 10,
    },
    headers: {
      "X-CMC_PRO_API_KEY": import.meta.env.VITE_COIN_MARKET_CAP_API_KEY,
    },
  });
  const latestCryptoArr: LatestListingResponse[] = response.data.data;
  const coinIds = latestCryptoArr.map((coin) => coin.id);

  const coinInfoResponse = await axios.get("/api/v1/cryptocurrency/info", {
    params: {
      id: coinIds.join(","),
    },
    headers: {
      "X-CMC_PRO_API_KEY": import.meta.env.VITE_COIN_MARKET_CAP_API_KEY,
    },
  });

  for (let i = 0; i < latestCryptoArr.length; i++) {
    latestCryptoArr[i].logo =
      coinInfoResponse.data.data[latestCryptoArr[i].id].logo;
  }

  return response.data.data;
};
