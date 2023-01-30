import { Box, useMediaQuery } from "@chakra-ui/react";
import { BarChart } from "../../charts/BarChart";
import LineChart from "../../charts/LineAreaChart";
import { barChartProjectsData, barChartProjects } from "../variables/charts";

export const ProjectsBarChart = (props: any) => {
  return (
    <Box w={"100%"} height="250px">
      <BarChart
        chartData={barChartProjectsData}
        chartOptions={barChartProjects}
      />
    </Box>
  );
};
