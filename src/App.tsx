import { Box, Flex, MantineProvider, Pagination } from "@mantine/core";
import "@mantine/core/styles.css";
import { LatestCryptoTable } from "./components/latestCryptoTable/LatestCryptoTable";
import { useEffect, useState } from "react";
import { LatestListingResponse } from "./types/response";
import { fetchLatestCrypto } from "./helpers/fetchCryptoData";
import { of } from "await-of";

function App() {
  const [latestCrypto, setLatestCrypto] = useState<LatestListingResponse[]>([]);

  useEffect(() => {
    _onFetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      _onFetchData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const _onFetchData = async (start: number = 1) => {
    const [data, error] = await of(fetchLatestCrypto(start));
    if (error) {
      throw new Error(
        "Polling - Failed to fetch data from Coin Market Cap API"
      );
    }
    setLatestCrypto(data ?? []);
  };

  const _onHandlePagination = (page: number) => {
    let start = 1;
    if (page !== 1) {
      start = page * 10 - 9; // we want the start be the limit + 1 of our previous page
    }
    _onFetchData(start);
  };

  return (
    <MantineProvider>
      <Box m="md">
        <Flex gap="xs" direction="column">
          <LatestCryptoTable latestCrypto={latestCrypto} />
          <Flex align="center" justify="center">
            <Pagination total={5} onChange={_onHandlePagination} />
          </Flex>
        </Flex>
      </Box>
    </MantineProvider>
  );
}

export default App;
