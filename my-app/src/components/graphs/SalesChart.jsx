import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = {
  December: [
    { name: "5k", value: 20, sales: 50.3 },
    { name: "10k", value: 35, sales: 70.75 },
    { name: "15k", value: 42, sales: 30.12 },
    { name: "20k", value: 65, sales: 90.902 },
    { name: "25k", value: 38, sales: 60.5 },
    { name: "30k", value: 52, sales: 80.88 },
    { name: "35k", value: 22, sales: 40.01 },
    { name: "40k", value: 48, sales: 75.4 },
    { name: "45k", value: 60, sales: 95.99 },
    { name: "50k", value: 55, sales: 85.6 },
    { name: "55k", value: 40, sales: 65.234 },
    { name: "60k", value: 50, sales: 70.78 }
  ],

  January: [
    { name: "5k", value: 20, sales: 50.3 },
    { name: "10k", value: 98, sales: 70.75 },
    { name: "15k", value: 36, sales: 30.12 },
    { name: "20k", value: 71, sales: 90.902 },
    { name: "25k", value: 38, sales: 60.5 },
    { name: "30k", value: 48, sales: 80.88 },
    { name: "35k", value: 22, sales: 40.01 },
    { name: "40k", value: 29, sales: 75.4 },
    { name: "45k", value: 90, sales: 95.99 },
    { name: "50k", value: 55, sales: 85.6 },
    { name: "55k", value: 47, sales: 21.231 },
    { name: "60k", value: 27, sales: 90.21 }
  ],

  February: [
    { name: "5k", value: 14, sales: 32.4 },
    { name: "10k", value: 28, sales: 55.3 },
    { name: "15k", value: 47, sales: 62.1 },
    { name: "20k", value: 58, sales: 88.9 },
    { name: "25k", value: 42, sales: 41.2 },
    { name: "30k", value: 37, sales: 77.1 },
    { name: "35k", value: 61, sales: 65.0 },
    { name: "40k", value: 53, sales: 90.2 },
    { name: "45k", value: 44, sales: 54.3 },
    { name: "50k", value: 32, sales: 63.7 },
    { name: "55k", value: 26, sales: 71.4 },
    { name: "60k", value: 19, sales: 48.3 }
  ],

  March: [
    { name: "5k", value: 32, sales: 44.1 },
    { name: "10k", value: 55, sales: 61.2 },
    { name: "15k", value: 67, sales: 72.4 },
    { name: "20k", value: 48, sales: 83.7 },
    { name: "25k", value: 29, sales: 55.8 },
    { name: "30k", value: 42, sales: 36.5 },
    { name: "35k", value: 57, sales: 79.2 },
    { name: "40k", value: 63, sales: 91.3 },
    { name: "45k", value: 72, sales: 65.7 },
    { name: "50k", value: 58, sales: 48.8 },
    { name: "55k", value: 44, sales: 28.0 },
    { name: "60k", value: 33, sales: 50.1 }
  ],

  April: [
    { name: "5k", value: 45, sales: 60.3 },
    { name: "10k", value: 52, sales: 72.9 },
    { name: "15k", value: 40, sales: 35.1 },
    { name: "20k", value: 62, sales: 58.2 },
    { name: "25k", value: 71, sales: 81.3 },
    { name: "30k", value: 55, sales: 90.0 },
    { name: "35k", value: 38, sales: 49.8 },
    { name: "40k", value: 29, sales: 68.2 },
    { name: "45k", value: 47, sales: 75.4 },
    { name: "50k", value: 65, sales: 58.1 },
    { name: "55k", value: 53, sales: 31.3 },
    { name: "60k", value: 41, sales: 44.7 }
  ],

  May: [
    { name: "5k", value: 29, sales: 45.5 },
    { name: "10k", value: 33, sales: 67.7 },
    { name: "15k", value: 49, sales: 80.1 },
    { name: "20k", value: 62, sales: 93.5 },
    { name: "25k", value: 78, sales: 55.9 },
    { name: "30k", value: 57, sales: 63.2 },
    { name: "35k", value: 43, sales: 44.6 },
    { name: "40k", value: 36, sales: 51.3 },
    { name: "45k", value: 59, sales: 72.8 },
    { name: "50k", value: 64, sales: 85.2 },
    { name: "55k", value: 48, sales: 73.1 },
    { name: "60k", value: 31, sales: 40.4 }
  ],

  June: [
    { name: "5k", value: 22, sales: 35.3 },
    { name: "10k", value: 47, sales: 42.9 },
    { name: "15k", value: 58, sales: 60.1 },
    { name: "20k", value: 73, sales: 79.2 },
    { name: "25k", value: 69, sales: 85.5 },
    { name: "30k", value: 51, sales: 63.0 },
    { name: "35k", value: 46, sales: 54.4 },
    { name: "40k", value: 33, sales: 41.1 },
    { name: "45k", value: 57, sales: 72.2 },
    { name: "50k", value: 61, sales: 88.3 },
    { name: "55k", value: 44, sales: 69.4 },
    { name: "60k", value: 28, sales: 39.2 }
  ],

  July: [
    { name: "5k", value: 19, sales: 33.3 },
    { name: "10k", value: 25, sales: 41.1 },
    { name: "15k", value: 40, sales: 57.5 },
    { name: "20k", value: 58, sales: 77.4 },
    { name: "25k", value: 64, sales: 88.8 },
    { name: "30k", value: 53, sales: 92.1 },
    { name: "35k", value: 47, sales: 64.2 },
    { name: "40k", value: 31, sales: 50.6 },
    { name: "45k", value: 44, sales: 62.4 },
    { name: "50k", value: 56, sales: 81.2 },
    { name: "55k", value: 39, sales: 72.0 },
    { name: "60k", value: 22, sales: 44.3 }
  ],

  August: [
    { name: "5k", value: 30, sales: 55.8 },
    { name: "10k", value: 48, sales: 68.4 },
    { name: "15k", value: 70, sales: 79.5 },
    { name: "20k", value: 61, sales: 56.2 },
    { name: "25k", value: 52, sales: 44.7 },
    { name: "30k", value: 45, sales: 33.2 },
    { name: "35k", value: 38, sales: 42.1 },
    { name: "40k", value: 56, sales: 72.8 },
    { name: "45k", value: 68, sales: 84.1 },
    { name: "50k", value: 74, sales: 91.5 },
    { name: "55k", value: 57, sales: 75.4 },
    { name: "60k", value: 41, sales: 48.0 }
  ],

  September: [
    { name: "5k", value: 80, sales: 53.8 },
    { name: "10k", value: 28, sales: 28.4 },
    { name: "15k", value: 50, sales: 39.5 },
    { name: "20k", value: 21, sales: 56.2 },
    { name: "25k", value: 52, sales: 64.7 },
    { name: "30k", value: 35, sales: 73.2 },
    { name: "35k", value: 68, sales: 62.1 },
    { name: "40k", value: 76, sales: 22.8 },
    { name: "45k", value: 38, sales: 14.1 },
    { name: "50k", value: 94, sales: 91.5 },
    { name: "55k", value: 57, sales: 85.4 },
    { name: "60k", value: 41, sales: 36.0 }
  ],

  October: [
    { name: "5k", value: 25, sales: 38.9 },
    { name: "10k", value: 37, sales: 52.7 },
    { name: "15k", value: 58, sales: 71.4 },
    { name: "20k", value: 67, sales: 89.2 },
    { name: "25k", value: 48, sales: 60.3 },
    { name: "30k", value: 41, sales: 48.2 },
    { name: "35k", value: 34, sales: 36.9 },
    { name: "40k", value: 53, sales: 77.7 },
    { name: "45k", value: 65, sales: 93.4 },
    { name: "50k", value: 72, sales: 81.0 },
    { name: "55k", value: 49, sales: 58.1 },
    { name: "60k", value: 35, sales: 45.5 }
  ],

  November: [
    { name: "5k", value: 17, sales: 28.1 },
    { name: "10k", value: 29, sales: 39.8 },
    { name: "15k", value: 51, sales: 58.2 },
    { name: "20k", value: 63, sales: 74.1 },
    { name: "25k", value: 55, sales: 82.0 },
    { name: "30k", value: 46, sales: 68.9 },
    { name: "35k", value: 39, sales: 57.5 },
    { name: "40k", value: 28, sales: 42.1 },
    { name: "45k", value: 52, sales: 66.7 },
    { name: "50k", value: 61, sales: 78.3 },
    { name: "55k", value: 44, sales: 70.4 },
    { name: "60k", value: 31, sales: 39.9 }
  ]
};

import { CustomTooltip } from "../graphs/Tooltip.jsx";
import { MonthContext } from "./SelectedMonth.jsx";
import { useContext } from "react";
export default function SalesChart() {
  const { month } = useContext(MonthContext);
  const currentData = data[month] || data["December"];
  return (
    <div className="bg-[#273142] p-6 rounded-xl">
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={currentData}>
            <defs>
              <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#334155" vertical={false} />

            <XAxis
              dataKey="name"
              stroke="#94A3B8"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              stroke="#94A3B8"
              tick={{ fontSize: 12 }}
              domain={[20, 100]}
              tickFormatter={(v) => `${v}%`}
              ticks={[20, 40, 60, 80, 100]}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              content={<CustomTooltip />}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="none"
              fill="url(#colorArea)"
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ r: 4, fill: "#3B82F6" }}
              activeDot={{ r: 6, fill: "orange" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
