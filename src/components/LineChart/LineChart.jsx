import { LineChart as LiChart, Line,XAxis, YAxis } from 'recharts';

const LineChart = () => {

    
        const mathMarkData = [
          { "student_id": 1, "name": "John Doe", "math_mark": 85 },
          { "student_id": 2, "name": "Jane Smith", "math_mark": 78 },
          { "student_id": 3, "name": "David Johnson", "math_mark": 92 },
          { "student_id": 4, "name": "Sarah Williams", "math_mark": 88 },
          { "student_id": 5, "name": "Michael Brown", "math_mark": 75 },
          { "student_id": 6, "name": "Emily Davis", "math_mark": 90 },
          { "student_id": 7, "name": "Olivia Wilson", "math_mark": 79 },
          { "student_id": 8, "name": "James Lee", "math_mark": 95 },
          { "student_id": 9, "name": "Sophia Martinez", "math_mark": 86 },
          { "student_id": 10, "name": "Liam Hernandez", "math_mark": 93 }
        ]
      
      
    return (
        <div>
            <LiChart width={800} height={400} data={mathMarkData} > 
            <XAxis dataKey="name"/>
            <YAxis></YAxis>
            <Line dataKey="math_mark" stroke='red '> </Line>
            </LiChart>
        </div>
    );
};

export default LineChart;