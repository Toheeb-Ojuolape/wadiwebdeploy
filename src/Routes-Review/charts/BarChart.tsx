
import Chart from 'react-apexcharts';

export const BarChart = (props: any) => {

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