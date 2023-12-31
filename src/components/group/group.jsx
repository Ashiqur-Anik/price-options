import { PieChart, Pie } from 'recharts';

const Group = () => {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ];
    return (
        <div>
            <PieChart width={500} height={600} data={data01}>
            {/* <Pie data={data01} dataKey="value" fill='#8884d8' /> */}
            <Pie data={data02} dataKey="value" fill='red'></Pie>
            </PieChart>
        </div>
    );
};

export default Group;