import POSPublic from "./POSPublic";
import PrimarySales from "./PrimarySales";
import PurchaseAnalytics from "./PurchaseAnalytics";
import { SalesAnalytics } from "./SalesAnalytics";
import { SalesDashboard } from "./SalesTrendDashboard";
import { StockAnalytics } from "./StockAnalytics";
import CustomerAnalytics from "./TopCustomersSection";
import TotalReceivablesAndPayables from "./TotalReceivablesAndPayables";
import TotalSalesReturn from "./TotalSalesReturn";

export default function BusinessComponent() {
  // const latestTransactions = [
  //   {
  //     date: "Sep 24, 2025",
  //     category: "Sales",
  //     amount: "BDT 400,000.0000",
  //     type: "income",
  //   },
  //   {
  //     date: "Sep 24, 2025",
  //     category: "Sales",
  //     amount: "BDT 750.0000",
  //     type: "income",
  //   },
  //   {
  //     date: "Sep 24, 2025",
  //     category: "Sales",
  //     amount: "BDT 50,000.0000",
  //     type: "income",
  //   },
  //   {
  //     date: "Sep 24, 2025",
  //     category: "Sales",
  //     amount: "BDT 10,500.0000",
  //     type: "income",
  //   },
  //   {
  //     date: "Sep 24, 2025",
  //     category: "Discount Given",
  //     amount: "BDT 0.0000",
  //     type: "expense",
  //   },
  // ];

  return (
    <div className="min-h-screen md:bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-2 ">
      <div className="w-full space-y-6 md:px-6">
        <PrimarySales />

        <POSPublic />

        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:gap-10">
          <SalesDashboard />

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden w-full">
            <SalesAnalytics />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:gap-10">
          <div className="col-span-2 space-y-8">
            <PurchaseAnalytics />

            <TotalReceivablesAndPayables />
          </div>

          <div className="">
            <StockAnalytics />
          </div>
        </div>
      </div>

      {/* Latest Transactions */}
      {/* <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-6">
          <div className="flex items-center space-x-3">
            <Activity className="w-7 h-7 text-white" />
            <h3 className="text-2xl font-bold text-white">
              Latest Income Transactions
            </h3>
          </div>
          <p className="text-violet-100 mt-2">Recent financial activities</p>
        </div>
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-8 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {latestTransactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200"
                  >
                    <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap">
                      <span
                        className={`inline-flex px-4 py-2 text-xs font-bold rounded-full ${
                          transaction.category === "Sales"
                            ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200"
                            : "bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border border-yellow-200"
                        }`}
                      >
                        {transaction.category}
                      </span>
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-right text-sm font-bold text-gray-900">
                      {transaction.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}

      <TotalSalesReturn />

      <div className="space-y-4 md:gap-8 py-10">
        <CustomerAnalytics />
      </div>
    </div>
  );
}
