import { Flex } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import MockData from "./MOCK_TABLE.json";
import { ResponsiveLine } from "@nivo/line";
import { format } from "date-fns";
import "font-proxima-nova/style.css";

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

  const vaultsList = useMemo(() => {
    return MockData.vaults.filter(
      (vault) => vault.index !== 6 && vault.index !== 1 && vault.index !== 7
    );
  }, []);

  const formattedData = vaultsList.map((data: any, index: any) => {
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
      legend: {
        text: {
          fontSize: 11,
          fill: "#D0D0DA",
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
        useMesh={true}
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
        yFormat=" >-.2f"
        lineWidth={1}
        areaBaselineValue={0}
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
            const filterCondition = indexNum % (divider * 2) === 0;

            if (indexNum && filterCondition) {
              return splitValue[0];
            }

            return "";
          },
        }}
        colors={colors}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Token Allocation",
          legendOffset: -60,
          legendPosition: "start",
        }}
        pointSize={0}
        tooltip={(point) => {
          return (
            <div
              style={{
                height: "42px",
                width: "100px",
                background: "#1F2128",
                position: "relative",
                border: `1px solid ${point.point.borderColor}`,
                left: "50px",
                borderRadius: "3px",
                top: "15px",
                display: "flex",
                padding: "5px 10px",
                flexDirection: "column",
                fontSize: "12px",
              }}>
              <div>
                X: {point.point.data.xFormatted.toString().split("_")[0]}
              </div>
              <div>Y: {point.point.data.yFormatted}</div>
            </div>
          );
        }}
        pointColor={{ from: "color" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
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
            itemOpacity: 1,
            symbolShape: (props) => {
              return (
                <svg width="12" height="20">
                  <rect
                    y="10"
                    width="12"
                    height="2"
                    style={{
                      fill: props.fill,
                    }}
                  />
                </svg>
              );
            },

            itemTextColor: "#D0D0DA",
          },
        ]}
        enableGridX={false}
        enableGridY={true}
      />
    </Flex>
  );
};

export default ClaimChart;
