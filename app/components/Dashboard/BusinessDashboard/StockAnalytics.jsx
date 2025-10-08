import {
    BarChart3,
    Package,
    ShoppingCart,
    TrendingUp
  } from "lucide-react";

const StockStatCard = ({ title, value, icon: Icon, iconBg, subtitle }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
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
  
  const TableRow = ({
    model,
    quantity,
    value,
    thisMonthQty,
    thisMonthValue,
    wos,
    isTotal = false,
  }) => (
    <tr
      className={`${
        isTotal
          ? "bg-gray-50 font-semibold border-t-2 border-gray-200"
          : "hover:bg-gray-50"
      } transition-colors`}
    >
      <td className="px-4 py-3 text-sm text-gray-800">{model}</td>
      <td className="px-4 py-3 text-sm text-center text-gray-600">{quantity}</td>
      <td className="px-4 py-3 text-sm text-right text-gray-800">
        ${value.toLocaleString()}
      </td>
      <td className="px-4 py-3 text-sm text-center text-gray-600">
        {thisMonthQty}
      </td>
      <td className="px-4 py-3 text-sm text-right text-gray-800">
        ${thisMonthValue.toLocaleString()}
      </td>
      <td className="px-4 py-3 text-sm text-center text-gray-600">{wos}</td>
    </tr>
  );
  
  export const StockAnalytics = () => {
    // Stock data from the image
    const stockData = [
      {
        model: "A511",
        quantity: 92,
        value: 6597765,
        thisMonthQty: 3,
        thisMonthValue: 334650,
        wos: 122.67,
      },
      {
        model: "AIDUO Q613",
        quantity: 10,
        value: 681030,
        thisMonthQty: 1,
        thisMonthValue: 92930,
        wos: 40,
      },
      {
        model: "F520",
        quantity: 141,
        value: 8573862,
        thisMonthQty: 0,
        thisMonthValue: 0,
        wos: 0,
      },
      {
        model: "MOK",
        quantity: 11,
        value: 914285,
        thisMonthQty: 0,
        thisMonthValue: 0,
        wos: 0,
      },
      {
        model: "MYC",
        quantity: 9,
        value: 782603,
        thisMonthQty: 1,
        thisMonthValue: 128000,
        wos: 36,
      },
      {
        model: "MYC (Motor: 800W & Battery: 60V23AH)",
        quantity: 23,
        value: 1596028,
        thisMonthQty: 7,
        thisMonthValue: 716100,
        wos: 13.14,
      },
      {
        model: "MYY",
        quantity: 8,
        value: 682550,
        thisMonthQty: 0,
        thisMonthValue: 0,
        wos: 0,
      },
      {
        model: "Warrior F626",
        quantity: 8,
        value: 676050,
        thisMonthQty: 0,
        thisMonthValue: 0,
        wos: 0,
      },
    ];
  
    const stockTotal = {
      quantity: 302,
      value: 20504173,
      thisMonthQty: 12,
      thisMonthValue: 1271680,
    };
  
    const stockStats = [
      {
        title: "Total Models",
        value: "8",
        icon: Package,
        iconBg: "from-blue-500 to-cyan-500",
      },
      {
        title: "Total Quantity",
        value: stockTotal.quantity.toString(),
        icon: BarChart3,
        iconBg: "from-green-500 to-emerald-500",
      },
      {
        title: "Stock Value",
        value: `$${(stockTotal.value / 1000000).toFixed(1)}M`,
        icon: TrendingUp,
        iconBg: "from-purple-500 to-violet-500",
      },
      {
        title: "Monthly Sales",
        value: `$${(stockTotal.thisMonthValue / 1000).toFixed(0)}K`,
        icon: ShoppingCart,
        iconBg: "from-orange-500 to-red-500",
      },
    ];
  
    return (
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-4">
          <div className="flex justify-center items-center space-x-3">
            <Package className="w-7 h-7 text-white" />
            <h3 className="text-2xl font-bold text-white">Stock Analytics</h3>
          </div>
          {/* <p className="text-violet-100 mt-2">Monitor your inventory levels</p> */}
        </div>
  
        <div className="p-2 md:p-8">
          <div className="grid grid-cols-1 gap-4 mb-4">
            {stockStats.map((stat, index) => (
              <StockStatCard key={index} {...stat} />
            ))}
          </div>
  
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* <div className="px-6 py-4 bg-gray-50 border-b">
              <h4 className="text-lg font-semibold text-gray-800">Stock Details</h4>
            </div> */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                      Model
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                      Quantity
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">
                      Value
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                      This Month Qty
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">
                      This Month Value
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                      WOS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {stockData.map((item, index) => (
                    <TableRow key={index} {...item} />
                  ))}
                  <TableRow
                    model="Total"
                    quantity={stockTotal.quantity}
                    value={stockTotal.value}
                    thisMonthQty={stockTotal.thisMonthQty}
                    thisMonthValue={stockTotal.thisMonthValue}
                    wos=""
                    isTotal={true}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };