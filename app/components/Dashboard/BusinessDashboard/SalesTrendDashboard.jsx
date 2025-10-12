"use client";
import { CreditCard } from "lucide-react";
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function SalesDashboard() {
  // 🧮 Generate sample 30-day sales data
  const data = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (29 - i)); // past 30 days
      return {
        name: date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
        }),
        value: Math.floor(Math.random() * (800000 - 50000) + 50000), // random sales between 50k–800k
        color: "#3b82f6", // blue color
      };
    });
  }, []);

  // 💰 Calculate total sales
  const totalSales = data.reduce((sum, item) => sum + item.value, 0);

  // 🧾 Format Y-axis values (e.g. 200,000 → "200,000")
  const formatYAxis = (value) => value.toLocaleString();

  // 🎨 Custom bar with rounded corners
  const CustomBar = (props) => {
    const { x, y, width, height, payload } = props;
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={payload.color}
        rx={4}
      />
    );
  };

  return (
    <div className="w-full mx-auto   bg-white rounded-3xl shadow-xl">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 rounded-tl-3xl rounded-tr-3xl">
        <div className="flex justify-center items-center space-x-3">
          <CreditCard className="w-7 h-7 text-white" />
          <h3 className="text-2xl font-bold text-white py-2">
            
            Total Sales Trend (Last 30 Days)
          </h3>
        </div>
      </div>
      <div className="text-center my-6">
        <p className="text-4xl font-bold text-gray-900">
          {totalSales.toLocaleString()}
        </p>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            angle={-30}
            textAnchor="end"
            height={80}
            tick={{ fill: "#6b7280", fontSize: 11 }}
          />
          <YAxis
            tickFormatter={formatYAxis}
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />
          <Tooltip
            formatter={(value) => value.toLocaleString()}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              padding: "8px 12px",
            }}
          />
          <Bar dataKey="value" shape={<CustomBar />} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
