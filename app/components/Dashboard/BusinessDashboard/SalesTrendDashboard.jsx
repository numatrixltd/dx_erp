"use client";
import { CreditCard } from "lucide-react";
import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const FILTERS = [
  { key: "daily", label: "Daily", title: "Last 30 Days" },
  { key: "monthly", label: "Monthly", title: "Last 12 Months" },
  { key: "yearly", label: "Yearly", title: "Last 5 Years" },
];

const DAYS_OF_HISTORY = 365 * 5;

// Sample data: one record per day for the past 5 years.
// Replace this with your API data ({ date: Date, value: number }[]).
function generateDailySales() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Array.from({ length: DAYS_OF_HISTORY }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (DAYS_OF_HISTORY - 1 - i));
    return {
      date,
      value: Math.floor(Math.random() * (800000 - 50000) + 50000),
    };
  });
}

// Group daily records into the chosen period.
function aggregate(dailyData, filter) {
  if (filter === "daily") {
    return dailyData.slice(-30).map((d) => ({
      name: d.date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      }),
      value: d.value,
    }));
  }

  const buckets = new Map();
  dailyData.forEach(({ date, value }) => {
    const key =
      filter === "monthly"
        ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
        : `${date.getFullYear()}`;
    if (!buckets.has(key)) {
      buckets.set(key, { date, value: 0 });
    }
    buckets.get(key).value += value;
  });

  const rows = Array.from(buckets.values()).map(({ date, value }) => ({
    name:
      filter === "monthly"
        ? date.toLocaleDateString("en-GB", { month: "short", year: "2-digit" })
        : String(date.getFullYear()),
    value,
  }));

  return filter === "monthly" ? rows.slice(-12) : rows.slice(-5);
}

export function SalesDashboard() {
  const [filter, setFilter] = useState("daily");

  const dailyData = useMemo(generateDailySales, []);

  const data = useMemo(
    () =>
      aggregate(dailyData, filter).map((item) => ({
        ...item,
        color: "#3b82f6",
      })),
    [dailyData, filter],
  );

  const activeFilter = FILTERS.find((f) => f.key === filter);

  const totalSales = data.reduce((sum, item) => sum + item.value, 0);

  const formatYAxis = (value) => value.toLocaleString();

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
    <div className="w-full mx-auto bg-white rounded-3xl shadow-xl">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 rounded-tl-3xl rounded-tr-3xl">
        <div className="flex justify-center items-center space-x-3">
          <CreditCard className="w-7 h-7 text-white" />
          <h3 className="text-2xl font-bold text-white py-2">
            Total Sales Trend ({activeFilter.title})
          </h3>
        </div>
      </div>

      {/* Filter */}
      <div className="flex justify-center mt-6">
        <div
          role="tablist"
          aria-label="Sales period"
          className="inline-flex bg-gray-100 rounded-full p-1"
        >
          {FILTERS.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                filter === f.key
                  ? "bg-white text-indigo-600 shadow"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {f.label}
            </button>
          ))}
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
            angle={filter === "daily" ? -30 : 0}
            textAnchor={filter === "daily" ? "end" : "middle"}
            height={80}
            interval={0}
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
