import axios from "axios";
import { LatestListingResponse } from "../types/response";

export const fetchLatestCrypto = async (): Promise<LatestListingResponse[]> => {
  const response = await axios.get("/api/v1/cryptocurrency/listings/latest", {
    params: {
      start: 1,
      limit: 10,
    },
    headers: {
      "X-CMC_PRO_API_KEY": import.meta.env.VITE_COIN_MARKET_CAP_API_KEY,
    },
  });
  return response.data.data;
};
