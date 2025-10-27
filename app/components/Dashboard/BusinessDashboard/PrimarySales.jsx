"use client"

import { useState, useEffect } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CreditCard,
  DollarSign,
  TrendingUp,
  Loader2,
  AlertCircle
} from "lucide-react";

const ICON_MAP = [DollarSign, TrendingUp, BarChart3, Activity];
const GRADIENT_MAP = [
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500"
];

const StatCard = ({ title, value, change, trend, previous, gradient, iconBg, icon: Icon }) => (
  <div className="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
    
    <div className="relative p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <p className="text-lg font-bold text-gray-900 leading-tight my-2">{value}</p>
          <div className={`inline-flex items-center text-white justify-center w-8 h-8 rounded-xl bg-gradient-to-r ${iconBg} shadow-lg`}>
            VS
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {trend === "up" ? (
            <div className="flex items-center space-x-1 bg-emerald-100 text-emerald-700 px-4 py-4 rounded-full">
              <ArrowUpRight className="w-3 h-3" />
              <span className="text-xs font-semibold">{change}</span>
            </div>
          ) : trend === "down" ? (
            <div className="flex items-center space-x-1 bg-red-100 text-red-700 px-4 py-4 rounded-full">
              <ArrowDownRight className="w-3 h-3" />
              <span className="text-xs font-semibold">{change}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1 bg-gray-100 text-gray-600 px-4 py-4 rounded-full">
              <span className="text-xs font-semibold">{change}</span>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-md text-gray-400">{previous}</p>
    </div>
  </div>
);

const PrimarySales = () => {
  const [statsData, setStatsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/primary-sales");
        
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        const data = await res.json();
        setStatsData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <Header />
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          <span className="ml-3 text-gray-600">Loading sales data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-red-800 font-semibold mb-1">Error Loading Data</h4>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, i) => (
          <StatCard
            key={i}
            {...stat}
            gradient={GRADIENT_MAP[i]}
            iconBg={GRADIENT_MAP[i]}
            icon={ICON_MAP[i]}
          />
        ))}
      </div>
    </div>
  );
};

const Header = () => (
  <div className="bg-gradient-to-r from-blue-500 to-red-600 px-8 py-3 rounded-xl">
    <div className="flex justify-center items-center space-x-3">
      <CreditCard className="w-7 h-7 text-white" />
      <h3 className="text-2xl font-bold text-white">Primary Sales</h3>
    </div>
    <p className="text-indigo-100 mt-2 text-center">
      Track your Sales performance metrics
    </p>
  </div>
);

export default PrimarySales;