import { Box } from "@chakra-ui/react";
import { LineChart } from "../../charts/LineChart";
import {
  lineChartDataTotalEarnings,
  lineChartOptionsEarnings,
} from "../variables/charts";

export const EarningLineChart = (props: any) => {
  return (
    <Box minH="260px" minW="100%" mt="auto">
      <LineChart
        chartData={lineChartDataTotalEarnings}
        chartOptions={lineChartOptionsEarnings}
      />
    </Box>
  );
};
