import { Table } from "@mantine/core";

export const LatestCryptoTable = () => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>MarketCap</Table.Th>
          <Table.Th>Circulating Supply</Table.Th>
          <Table.Th>Change %</Table.Th>
          <Table.Th>Last(24H)</Table.Th>
        </Table.Tr>
      </Table.Thead>
    </Table>
  );
};
