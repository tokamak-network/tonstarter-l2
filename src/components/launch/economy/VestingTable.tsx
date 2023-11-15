import { Flex, chakra, Text, Input } from "@chakra-ui/react";
import { useMemo } from "react";
import { useTable, TableOptions, Column } from "react-table";
import MockData from "./MOCK_DATA_Vesting.json";

type MockData = {
  id: number;
  DateTime: string;
  TokenAllocation: string;
};
const VestingTable = (props: { edit: boolean }) => {
  const { edit } = props;

  const columnsFormatted: Column<MockData>[] = useMemo(
    () => [
      { Header: "No. ", accessor: "id" },
      { Header: "Date Time", accessor: "DateTime" },
      { Header: "Token Allocation", accessor: "TokenAllocation" },
    ],
    []
  );
  const data = useMemo((): MockData[] => MockData, []);

  const tableInstance = useTable({
    columns: columnsFormatted,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <Flex width={"100%"} height={"20px"}>
      <chakra.table
        width={"full"}
        {...getTableProps()}
        display="flex"
        flexDirection="column">
        <chakra.thead>
          {headerGroups.map((headerGroup, index) => (
            <chakra.tr
              {...headerGroup.getFooterGroupProps()}
              key={index}
              borderBottom={"1px solid #313442"}
              mb={"12px"}>
              {headerGroup.headers.map((column, index) => {
                return (
                  <chakra.th {...column.getHeaderProps()} key={index}>
                    <Flex
                      mb={"9px"}
                      flexDir={"column"}
                      height={"32px"}
                      justifyContent={"center"}
                      alignItems={"center"}>
                      <Text
                        height={"12px"}
                        borderRight={
                          column.id === "TokenAllocation"
                            ? ""
                            : "1px solid #484848"
                        }
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        width={
                          column.id === "id"
                            ? "50px"
                            : column.id === "DateTime"
                            ? "128px"
                            : "160px"
                        }
                        color={"#fff"}
                        fontSize={"13px"}>
                        {column.render("Header")}
                      </Text>
                      {column.id === "TokenAllocation" ? (
                        <Text
                          fontSize={"13px"}
                          fontWeight={400}
                          color={"#9d9ea5"}>
                          (Accumulated)
                        </Text>
                      ) : (
                        <></>
                      )}
                    </Flex>
                  </chakra.th>
                );
              })}
            </chakra.tr>
          ))}
        </chakra.thead>
        <chakra.tbody {...getTableBodyProps()} mt={"12px !important"}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <chakra.tr
                {...row.getRowProps()}
                key={index}
                height={"50px"}
                justifyContent={"center"}
                alignItems={"center"}>
                {row.cells.map((cell, index) => {
                  const type = cell.column.id;
                  const amount = Number(cell.row.original.TokenAllocation);

                  return (
                    <chakra.td
                      {...cell.getCellProps()}
                      key={index}
                      height={"50px"}>
                      <Flex
                        w={
                          type === "id"
                            ? "50px"
                            : type === "DateTime"
                            ? "128px"
                            : "160px"
                        }
                        borderRight={
                          type === "TokenAllocation" ? "" : "1px solid #484848"
                        }
                        flexDir={"column"}
                        height={"12px"}
                        justifyContent={"center"}
                        alignItems={"center"}>
                        {edit && type === "TokenAllocation" ? (
                          <Input
                            w={"130px"}
                            h={"24px"}
                          mb={ '3px'}
                            bg={"#252525"}
                            borderRadius={0}
                            _focusVisible={{
                              borderBottom: "1px solid #0070ED !important",
                            }}
                            textAlign={"center"}
                            _hover={{
                              borderBottom: "1px solid #0070ED !important",
                            }}
                            placeholder={"0"}
                            outline={"none"}
                            fontSize={"13px"}
                            fontWeight={600}
                            border={"transparent"}
                            pl={"20px"}
                            _placeholder={{
                              opacity: 1,
                              color: "#818181",
                              fontsize: "18px",
                              lineHeight: "normal",
                            }}
                          />
                        ) : (
                          <Text
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            w={"100%"}
                            color={"#fff"}
                            letterSpacing={"0.26px"}
                            fontSize={"13px"}
                            fontWeight={400}>
                            {type === "id" ? "0" : ""}
                            {cell.render("Cell")}
                          </Text>
                        )}
                        <Flex columnGap={"5px"}>
                          <Text
                            fontSize={edit ? "12px" : "13px"}
                            fontWeight={400}
                            color={"#9d9ea5"}>
                            {type === "TokenAllocation"
                              ? "603232"
                              : type === "DateTime"
                              ? "(UTC+9)"
                              : ""}
                          </Text>

                          {edit && type === "DateTime" && (
                            <Text
                              fontSize={"13px"}
                              fontWeight={400}
                              letterSpacing={"0.26px"}
                              color={"#0070ED"}>
                              Edit
                            </Text>
                          )}
                        </Flex>
                      </Flex>
                    </chakra.td>
                  );
                })}
              </chakra.tr>
            );
          })}
        </chakra.tbody>
      </chakra.table>
    </Flex>
  );
};

export default VestingTable;
