import { Box, Flex, MantineProvider } from "@mantine/core";
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

  const _onFetchData = async () => {
    const [data, error] = await of(fetchLatestCrypto());
    if (error) {
      throw new Error(
        "Polling - Failed to fetch data from Coin Market Cap API"
      );
    }
    setLatestCrypto(data ?? []);
  };

  return (
    <MantineProvider>
      <Box m="md">
        <Flex gap="xs" direction="column">
          <LatestCryptoTable latestCrypto={latestCrypto} />
        </Flex>
      </Box>
    </MantineProvider>
  );
}

export default App;
