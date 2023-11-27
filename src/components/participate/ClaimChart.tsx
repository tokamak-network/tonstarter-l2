import { Flex } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import MockData from "./MOCK_TABLE.json";
import { ResponsiveLine } from "@nivo/line";
import { format } from "date-fns";

type DataPoint = { x: number; y: number };
type LineChartProps = {
  width: number;
  height: number;
  data: DataPoint[];
};

const ClaimChart = () => {
  const [data, setData] = useState<any[]>([]);

  const colors = [
    "#8dd3c7",
    "#b3de69",
    "#bebada",
    "#fb8072",
    "#80b1d3",
    "#fccde5",
    "#FF151F",
    "#bc80bd",
    "#ccebc5",
    "#ffed6f",
    "#AB7DF6",
    "#40B630",
  ];

  console.log("MockData,", MockData);

  const vaultsList = useMemo(() => {
    return MockData.vaults.filter(
      (vault) => vault.index !== 6 && vault.index !== 1 && vault.index !== 7
    );
  }, []);

  const formattedData = vaultsList.map((data: any, index: any) => {
    // console.log(index);
    return {
      id: data.vaultName,
      color: colors[index],
      data: data.claim.map((claims: any, index: any) => {
        return {
          x:
            claims.claimTime === undefined
              ? 0
              : format(claims.claimTime * 1000, "yyyy.MM.dd").concat(
                  `_${index + 1}`
                ),
          y:
            claims.claimTokenAllocation === undefined
              ? 0
              : claims.claimTokenAllocation,
        };
      }),
    };
  });

  const lengths = formattedData
    .map((dataSet) => dataSet.data.length)
    .sort((a, b) => b - a);
  const divider = Math.floor(lengths[0] / 6);

  const theme = {
    axis: {
      ticks: {
        text: {
          fontSize: 11,
          fill: "#9D9EA5",
        },
      },
    },
    crosshair: {
      line: {
        stroke: "#373737",
        strokeWidth: 1,
        strokeOpacity: 0.4,
        strokeDasharray: "10",
      },
    },
    grid: {
      line: {
        stroke: "#373737",
      },
    },
  };

  return (
    <Flex height={"500px"}>
      <ResponsiveLine
        data={formattedData}
        theme={theme}
        margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
          // stacked: true,
          reverse: false,
        }}
        // yFormat=" >-.2f"
        lineWidth={1}
        areaBaselineValue={0}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 20,
          tickRotation: 0,
          legendOffset: 36,
          tickValues: 4,
          legendPosition: "end",
          format: (value: string) => {
            const splitValue = value.split("_");
            const indexNum = Number(splitValue[1]);
            // console.log('indexNum',indexNum);
            const filterCondition = indexNum % (divider * 2) === 0;

            if (indexNum && filterCondition) {
              return splitValue[0];
            }

            return "";
          },
        }}
        enableSlices="x"
        enableCrosshair={true}
        colors={colors}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Token Allocation",
          legendOffset: -60,
          legendPosition: "middle",
        }}
        pointSize={0}
        tooltip={() => {
          return <Flex w={100} h={100} bg={"red"}></Flex>;
        }}
        sliceTooltip={({ slice }) => {
          //@ts-ignore
          const thisIndex = slice.points[0].data.dataIndex;
          console.log('slice',slice);
          
          return (
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}>
              {/* <Box
                pos={"absolute"}
                w={100}
                h={10}
                bg={"#2775ff"}
                top={-10}
              ></Box> */}
              <div
                style={{
                  background: "#1F2128",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding:'5px 10px',
                  borderRadius: "3px",

                  position: "absolute",
                }}>
                {slice.points.map((point, index) => {
                  const color = point.borderColor.toString();
                  console.log('color',slice);
                  
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                     
                      }}
                      key={`${index}_${point.serieColor}`}>
                      <div
                        style={{
                          background: color,
                          marginRight: "9px",
                          borderRadius: "50%",
                          height: "10px",
                          width: "10px",
                        }}></div>
                    </div>
                  );
                })}
                {/* <div
                  style={{
                    background: "#405df9",
                    marginRight: "9px",
                    borderRadius: "50%",
                    height: "10px",
                    width: "10px",
                  }}
                ></div>

                <div style={{ color: "#d0d0da" }}>
                  $
                  {Number(slice.points[0].data.y).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}
                </div> */}

                <div
                  style={{
                    color: "#9a9aaf",
                  }}>
                  {
                    //@ts-ignore
                  }
                </div>
              </div>
            </div>
          );
        }}
        pointColor={{ from: "color" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={false}
        legends={[
          {
            anchor: "top",
            direction: "row",
            justify: false,
            translateX: 20,
            translateY: -40,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 100,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            itemTextColor: "#D0D0DA",
          },
        ]}
        gridXValues={["2023.05.20", "2024.05.14"]}
        enableGridX={true}
        enableGridY={true}
      />
    </Flex>
  );
};

export default ClaimChart;
