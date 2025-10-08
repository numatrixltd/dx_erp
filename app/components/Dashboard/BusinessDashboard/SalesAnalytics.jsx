import {
    BarChart3,
    Package,
    ShoppingCart,
    TrendingUp
} from "lucide-react";

const SalesStatCard = ({ title, value, icon: Icon, iconBg, subtitle }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-lg font-bold text-gray-800">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-r ${iconBg}`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
  
  export const SalesAnalytics = () => {
    // Sales data from the image
    const salesData = [
      { model: "A511", volume: 3, value: 334650 },
      { model: "AIDUO Q613", volume: 1, value: 92930 },
      { model: "MYC", volume: 1, value: 128000 },
      { model: "MYC (Motor: 800W & Battery: 60V23AH)", volume: 7, value: 716100 },
    ];
  
    const salesTotal = { volume: 12, value: 1271680 };
  
    const salesStats = [
      {
        title: "Total Models",
        value: "4",
        icon: Package,
        iconBg: "from-blue-500 to-cyan-500",
      },
      {
        title: "Total Volume",
        value: salesTotal.volume.toString(),
        icon: BarChart3,
        iconBg: "from-green-500 to-emerald-500",
      },
      {
        title: "Total Value",
        value: `$${salesTotal.value.toLocaleString()}`,
        icon: TrendingUp,
        iconBg: "from-purple-500 to-violet-500",
      },
      {
        title: "Avg per Unit",
        value: `$${Math.round(
          salesTotal.value / salesTotal.volume
        ).toLocaleString()}`,
        icon: ShoppingCart,
        iconBg: "from-orange-500 to-red-500",
      },
    ];
  
    return (
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4">
          <div className="flex justify-center items-center space-x-3">
            <ShoppingCart className="w-7 h-7 text-white" />
            <h3 className="text-2xl font-bold text-white">Sales Analytics</h3>
          </div>
          {/* <p className="text-emerald-100 mt-2">Monitor your sales performance</p> */}
        </div>
  
        <div className="p-2 md:p-4">
          <div className="grid grid-cols-1 gap-2 mb-4">
            {salesStats.map((stat, index) => (
              <SalesStatCard key={index} {...stat} />
            ))}
          </div>
  
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* <div className="px-6 py-4 bg-gray-50 border-b">
              <h4 className="text-lg font-semibold text-gray-800">Sales Details</h4>
            </div> */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                      Model
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                      Volume
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">
                      Value
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
                        {item.model}
                      </td>
                      <td className="px-4 py-3 text-sm text-center text-gray-600">
                        {item.volume}
                      </td>
                      <td className="px-4 py-3 text-sm text-right text-gray-800">
                        ${item.value.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-semibold border-t-2 border-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-800">Total</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-800">
                      {salesTotal.volume}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-800">
                      ${salesTotal.value.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };