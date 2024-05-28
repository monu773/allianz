import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
  Button
} from "@chakra-ui/react";
const TransactionTable = () => {
  const tableData = [
    {
      rank: "1",
      name: "Selling with re entr",
      calmerRatio: "3.96",
      amount: "381845",
      profit: "319.54",
      win: "0.65",
      price: "-"
    },
    {
      rank: "2",
      name: "strategy_name",
      calmerRatio: "3.62",
      amount: "	268872.5",
      profit: "216.31",
      win: "0.64",
      price: "500"
    },
    {
      rank: "3",
      name: "Based on premium and",
      calmerRatio: "3.42",
      amount: "255425",
      profit: "208.51",
      win: "0.64",
      price: "-"
    },
    {
      rank: "4",
      name: "strategy_name",
      calmerRatio: "3.22",
      amount: "370845",
      profit: "	303.47",
      win: "0.65",
      price: "-"
    },
    {
      rank: "5",
      name: "strategy_name",
      calmerRatio: "3.22",
      amount: "370845",
      profit: "	303.47",
      win: "0.65",
      price: "-"
    },
    {
      rank: "6",
      name: "	Based on premium wit",
      calmerRatio: "3.01",
      amount: "135980",
      profit: "185.77",
      win: "0.49",
      price: "-"
    },
    {
      rank: "7",
      name: "strategy_name",
      calmerRatio: "2.76",
      amount: "267867.5",
      profit: "	185.77",
      win: "0.49",
      price: "-"
    },
    {
      rank: "8",
      name: "Wait and trade_Save",
      calmerRatio: "2.62",
      amount: "178252.5",
      profit: "161.9",
      win: "0.6",
      price: "-"
    },
    {
      rank: "9",
      name: "iron condor",
      calmerRatio: "2.44",
      amount: "176420",
      profit: "137.51",
      win: "0.65",
      price: "-"
    },
    {
      rank: "10",
      name: "strategy_name",
      calmerRatio: "2.04",
      amount: "244555",
      profit: "198.66",
      win: "0.62",
      price: "-"
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Name</Th>
            <Th>Calmar Ratio</Th>
            <Th>Overall Profit</Th>
            <Th>Avg. Daily Profit</Th>
            <Th>Win %(Day)</Th>
            <Th>Price (Rs)</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black">
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="sm" fontWeight="medium">
                {data.rank}
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.name}
                  </Text>
                  {/* <Text fontSize="xs" color="black.60">
                    {data.time}
                  </Text> */}
                </Stack>
              </Td>
              <Td>
                {" "}
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.calmerRatio}
                  </Text>
                  {/* <Text fontSize="xs" color="black.60">
                    {data.type?.tag}
                  </Text> */}
                </Stack>
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                {data.amount}
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                >
                  {data.profit}
                </Tag>
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                {data.win}
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                {data.price}
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                <Button>View</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
