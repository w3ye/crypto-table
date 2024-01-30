import { Box, Flex, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <Box m="md">
        <Flex gap="xs" direction="column">
          <div>Hello world</div>
        </Flex>
      </Box>
    </MantineProvider>
  );
}

export default App;
