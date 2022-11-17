import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Charts({num1, num2}) {
console.log(num1);
    const data = {
        labels: ['Ready', 'Not Ready'],
        datasets: [
          {
            label: '# of Votes',
            data: [num1, num2],
            backgroundColor: [
              '#00CC00',
              '#3385ff',
            ],
            borderColor: [

                '#00CC00',
               '#3385ff',      
            ],
            borderWidth: 1,
          },
        ],
      };

  return <Pie data={data} />;
}
