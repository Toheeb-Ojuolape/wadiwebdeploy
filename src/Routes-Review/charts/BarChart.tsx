import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Chart from 'react-apexcharts';

export const BarChart = (props: any) => {
	const [isMobile] = useMediaQuery("(max-width: 1300px)");
		return (
			
			<Chart
				options={props.chartOptions}
				series={props.chartData}
				type='bar'
				width={'100%'}
				height='100%'
			/>
		);

		}