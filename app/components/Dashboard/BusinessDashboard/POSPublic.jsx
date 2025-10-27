import {
    Activity,
    ArrowDownRight,
    ArrowUpRight,
    CreditCard
} from "lucide-react";

const POSPublic = () => {
  const posData = [
    {
      title: "Today",
      value: "BDT 0.0000",
      change: "0%",
      trend: "neutral",
      previous: "Yesterday: BDT 10,635.0000",
    },
    {
      title: "This Week",
      value: "BDT 0.0000",
      change: "0%",
      trend: "neutral",
      previous: "Last Week: BDT 10,635.0000",
    },
    {
      title: "This Month",
      value: "BDT 35,280.0000",
      change: "244%",
      trend: "up",
      previous: "Last Month: BDT 262,627.7500",
    },
    {
      title: "This Year",
      value: "BDT 485,951.3500",
      change: "0%",
      trend: "up",
      previous: "Last Year: BDT 0.0000",
    },
  ];

  const StatCard = ({
    title,
    value,
    change,
    trend,
    previous,
    gradient,
    iconBg,
    icon: Icon = Activity,
  }) => {
    return (
      <div className="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        ></div>

        <div className="relative p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
              <p className="text-lg font-bold text-gray-900 leading-tight my-2">
                {value}
              </p>
              <div
                className={`inline-flex items-center text-white justify-center w-8 h-8 rounded-xl bg-gradient-to-r ${iconBg} shadow-lg`}
              >
                VS
              </div>
            </div>
            <div className="flex items-center space-x-1 ">
              {trend === "up" ? (
                <div className="flex items-center space-x-1 bg-emerald-100 text-emerald-700 px-4 py-4 rounded-full">
                  <ArrowUpRight className="w-3 h-3" />
                  <span className="text-xs font-semibold">{change}</span>
                </div>
              ) : trend === "down" ? (
                <div className="flex items-center space-x-1 bg-red-100 text-red-700 px-2 py-1 rounded-full">
                  <ArrowDownRight className="w-3 h-3" />
                  <span className="text-xs font-semibold">{change}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  <span className="text-xs font-semibold">{change}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-md text-gray-400">{previous}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden col-span-2">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3">
        <div className="flex justify-center items-center space-x-3">
          <CreditCard className="w-7 h-7 text-white" />
          <h3 className="text-2xl font-bold text-white">POS</h3>
        </div>
        <p className="text-indigo-100 mt-2 text-center">
          Track your POS performance metrics
        </p>
      </div>
      <div className="p-2 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posData.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              gradient={
                index === 0
                  ? "from-orange-500 to-amber-500"
                  : index === 1
                  ? "from-blue-500 to-indigo-500"
                  : index === 2
                  ? "from-green-500 to-emerald-500"
                  : "from-pink-500 to-rose-500"
              }
              iconBg={
                index === 0
                  ? "from-orange-500 to-amber-500"
                  : index === 1
                  ? "from-blue-500 to-indigo-500"
                  : index === 2
                  ? "from-green-500 to-emerald-500"
                  : "from-pink-500 to-rose-500"
              }
              icon={CreditCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default POSPublic;
