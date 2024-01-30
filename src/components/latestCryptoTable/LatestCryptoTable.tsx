import { Table } from "@mantine/core";
import { LatestCryptoRows } from "./LatestCryptoRows";
import { LatestListingResponse } from "../../types/response";
import { useEffect } from "react";

type LatestCryptoTableProps = {
  latestCrypto: LatestListingResponse[];
};

export const LatestCryptoTable = ({ latestCrypto }: LatestCryptoTableProps) => {
  useEffect(() => {}, [latestCrypto]);
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Market Cap</Table.Th>
          <Table.Th>Circulating Supply</Table.Th>
          <Table.Th>Change(90d) %</Table.Th>
          <Table.Th>Last(24H) %</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <LatestCryptoRows latestCrypto={latestCrypto} />
    </Table>
  );
};
