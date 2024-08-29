"use client"
import Image from 'next/image';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 92 ,fill:"#C3EBFA"},
  { name: 'Group B', value: 8 ,fill:"#FAE27C"},

];



const Performance = () => {
  return (
    <div className='bg-white p-4 rounded-md h-80 relative items-center'>
        <div className="flex items-center justify-between">
            <h1 className='text-xl font-semibold'>Performance</h1>
            <Image src="/moreDark.png" alt="" width={16} height={16}/>
        </div>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart >
            <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                fill="#8884d8"

            />
            </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transform">
            <h1 className="text-3xl font-bold">9.2</h1>
            <p className='text-xs text-gray-600'>of 10 max LTS</p>

        </div>
        <div className='absolute top-3/4 left-1/2 text-center -translate-y-3/4 -translate-x-20 text-xs font-medium'>
            1st Semester - 2nd Semester
        </div>

    </div>
  )
}

export default Performance
