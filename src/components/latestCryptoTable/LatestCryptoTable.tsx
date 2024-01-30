import { Table } from "@mantine/core";
import { LatestCryptoRows } from "./LatestCryptoRows";
import { mockCryptoData } from "../../mock/mockLatestCryptoData";

export const LatestCryptoTable = () => {
  const latestCrypto = mockCryptoData;
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Market Cap</Table.Th>
          <Table.Th>Circulating Supply</Table.Th>
          <Table.Th>Change %(90d)</Table.Th>
          <Table.Th>Last(24H)</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <LatestCryptoRows latestCrypto={latestCrypto} />
    </Table>
  );
};
