import { Flex, Table } from "@mantine/core";
import { LatestListingResponse } from "../../types/response";

type LatestCryptoRowsProps = {
  latestCrypto: LatestListingResponse[];
};
export const LatestCryptoRows = ({ latestCrypto }: LatestCryptoRowsProps) => {
  const rows = latestCrypto.map((crypto) => {
    return (
      <Table.Tr key={crypto.id}>
        <Table.Td>
          <Flex direction="column">
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>
              {crypto.name}
            </div>
            <div>{crypto.symbol}</div>
          </Flex>
        </Table.Td>
        <Table.Td>{crypto.quote.USD.price}</Table.Td>
        <Table.Td>$ {crypto.quote.USD.market_cap.toFixed(2)}</Table.Td>
        <Table.Td>{crypto.circulating_supply.toFixed(2)}</Table.Td>
        <Table.Td>
          <div
            style={{
              color: crypto.quote.USD.percent_change_90d > 0 ? "green" : "red",
            }}
          >
            {(crypto.quote.USD.percent_change_90d * 100).toFixed(2)}{" "}
          </div>
        </Table.Td>
        <Table.Td>
          <div
            style={{
              color:
                crypto.quote.USD.percent_change_24h * 100 > 0 ? "green" : "red",
            }}
          >
            {(crypto.quote.USD.percent_change_24h * 100).toFixed(2)}
          </div>
        </Table.Td>
      </Table.Tr>
    );
  });

  return <Table.Tbody>{rows}</Table.Tbody>;
};
