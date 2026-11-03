"use client";

import { useEffect } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Frown,
  Loader2,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { useAppSelector } from "@/lib/hooks";

const formatCurrency = (value) => {
  if (typeof value !== "string") return value ?? "";
  const match = value.match(/BDT\s*([\d,]+\.?\d*)/);
  if (match) {
    const number = parseFloat(match[1].replace(/,/g, ""));
    return `BDT ${Math.round(number).toLocaleString()}`;
  }
  return value;
};

const SalesStatCard = ({ title, value, change, trend, previous }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
        <p className="text-lg font-bold text-gray-800">{formatCurrency(value)}</p>
        <p className="text-xs text-gray-500 mt-1">{formatCurrency(previous)}</p>
      </div>
      <div
        className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full ${
          trend === "up"
            ? "bg-emerald-100 text-emerald-700"
            : trend === "down"
            ? "bg-red-100 text-red-700"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        {trend === "up" ? (
          <ArrowUpRight className="w-3 h-3" />
        ) : trend === "down" ? (
          <ArrowDownRight className="w-3 h-3" />
        ) : (
          <BarChart3 className="w-3 h-3" />
        )}
        <span className="text-xs font-semibold">{change}</span>
      </div>
    </div>
  </div>
);

export const SalesAnalytics = () => {
  const { data, loading, error } = useAppSelector((state) => state.pos);
  const { selectedEnvironment, environments } = useAppSelector(
    (state) => state.environment
  );
  const currentEnvironment = environments.find(
    (e) => e.id === selectedEnvironment
  );
  const salesData = Array.isArray(data) ? data : [];

  useEffect(() => {
    console.log("Sales Analytics retailSalesData", {
      env: selectedEnvironment,
      data,
    });
  }, [data, selectedEnvironment]);

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-center items-center space-x-3">
            <ShoppingCart className="w-7 h-7 text-white" />
            <h3 className="text-2xl font-bold text-white">Sales Analytics</h3>
          </div>
          <p className="text-white text-sm font-semibold bg-white/20 px-4 py-1 rounded-full">
            {currentEnvironment?.displayName || "DX TEL"}
          </p>
        </div>
      </div>

      <div className="p-2 md:p-4">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
            <span className="ml-3 text-gray-600">Loading sales data...</span>
          </div>
        ) : error || salesData.length === 0 ? (
          <div className="flex items-center justify-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Frown className="w-6 h-6 text-red-500" />
                <h4 className="text-red-800 font-semibold">NO DATA FOUND</h4>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-2 mb-4">
              {salesData.map((stat, index) => (
                <SalesStatCard key={index} {...stat} />
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                        Title
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">
                        Value
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                        Change
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                        Trend
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">
                        Previous
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {salesData.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3 text-sm text-gray-800">
                          {item.title}
                        </td>
                        <td className="px-4 py-3 text-sm text-right text-gray-800">
                          {formatCurrency(item.value)}
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-gray-600">
                          {item.change}
                        </td>
                        <td className="px-4 py-3 text-sm text-center capitalize text-gray-600">
                          <span className="inline-flex items-center justify-center">
                            {item.trend === "up" ? (
                              <TrendingUp className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <ArrowDownRight className="w-4 h-4 text-red-500" />
                            )}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-right text-gray-800">
                          {formatCurrency(item.previous)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
