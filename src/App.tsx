import { Box, Flex, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { LatestCryptoTable } from "./components/latestCryptoTable/LatestCryptoTable";

function App() {
  return (
    <MantineProvider>
      <Box m="md">
        <Flex gap="xs" direction="column">
          <LatestCryptoTable />
        </Flex>
      </Box>
    </MantineProvider>
  );
}

export default App;
