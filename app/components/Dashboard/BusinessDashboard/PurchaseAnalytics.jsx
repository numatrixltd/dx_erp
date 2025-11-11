import {
    Activity,
    ArrowDownRight,
    ArrowUpRight,
    ShoppingCart
} from "lucide-react";

const PurchaseAnalytics = () => {
  const purchaseData = [
    {
      title: "Today",
      value: "BDT 00",
      change: "0%",
      trend: "neutral",
      previous: "Yesterday: BDT 1,301,384",
    },
    {
      title: "This Week",
      value: "BDT 00",
      change: "0%",
      trend: "neutral",
      previous: "Last Week: BDT 1,301,384",
    },
    {
      title: "This Month",
      value: "BDT 9,864,490",
      change: "1000+%",
      trend: "down",
      previous: "Last Month: BDT 301,811,695",
    },
    {
      title: "This Year",
      value: "BDT 333,128,611",
      change: "0%",
      trend: "up",
      previous: "Last Year: BDT 00",
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
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-3">
        <div className="flex justify-center items-center space-x-3">
          <ShoppingCart className="w-7 h-7 text-white" />
          <h3 className="text-2xl font-bold text-white">Purchase Analytics</h3>
        </div>
        <p className="text-emerald-100 mt-2 text-center">
          Monitor your procurement expenses
        </p>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {purchaseData.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              gradient={
                index === 0
                  ? "from-purple-500 to-violet-500"
                  : index === 1
                  ? "from-orange-500 to-yellow-500"
                  : index === 2
                  ? "from-blue-500 to-cyan-500"
                  : "from-red-500 to-pink-500"
              }
              iconBg={
                index === 0
                  ? "from-purple-500 to-violet-500"
                  : index === 1
                  ? "from-orange-500 to-yellow-500"
                  : index === 2
                  ? "from-blue-500 to-cyan-500"
                  : "from-red-500 to-pink-500"
              }
              icon={ShoppingCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseAnalytics;
