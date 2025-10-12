import {
    Users,
    TrendingUp,
    DollarSign,
    Award,
    CreditCard,
    AlertCircle
  } from "lucide-react";
  
  const StatCard = ({ title, value, icon: Icon, iconBg, subtitle }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-lg font-bold text-gray-800">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-r ৳{iconBg}`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
  
  const CustomerRow = ({ rank, name, totalPurchase, transactions, avgOrder }) => (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3 text-sm text-center font-semibold text-gray-700">
        {rank}
      </td>
      <td className="px-4 py-3 text-sm text-gray-800">{name}</td>
      <td className="px-4 py-3 text-sm text-right text-gray-800 font-semibold">
        ৳{totalPurchase.toLocaleString()}
      </td>
      <td className="px-4 py-3 text-sm text-center text-gray-600">
        {transactions}
      </td>
      <td className="px-4 py-3 text-sm text-right text-gray-600">
        ৳{avgOrder.toLocaleString()}
      </td>
    </tr>
  );
  
  const CreditRow = ({ rank, name, creditAmount, dueDate, status }) => (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3 text-sm text-center font-semibold text-gray-700">
        {rank}
      </td>
      <td className="px-4 py-3 text-sm text-gray-800">{name}</td>
      <td className="px-4 py-3 text-sm text-right text-gray-800 font-semibold">
        ৳{creditAmount.toLocaleString()}
      </td>
      <td className="px-4 py-3 text-sm text-center text-gray-600">
        {dueDate}
      </td>
      <td className="px-4 py-3 text-sm text-center">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ৳{
            status === "Due Soon"
              ? "bg-yellow-100 text-yellow-700"
              : status === "Overdue"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
  
  export default function CustomerAnalytics() {
    // Top Customers Data
    const topCustomers = [
      { rank: 1, name: "ABC Electronics Ltd", totalPurchase: 1250000, transactions: 45, avgOrder: 27778 },
      { rank: 2, name: "Tech Solutions Inc", totalPurchase: 980000, transactions: 38, avgOrder: 25789 },
      { rank: 3, name: "Global Motors Co", totalPurchase: 875000, transactions: 32, avgOrder: 27344 },
      { rank: 4, name: "Urban Traders", totalPurchase: 750000, transactions: 28, avgOrder: 26786 },
      { rank: 5, name: "Prime Distributors", totalPurchase: 680000, transactions: 25, avgOrder: 27200 },
      { rank: 6, name: "Metro Sales Corp", totalPurchase: 620000, transactions: 22, avgOrder: 28182 },
      { rank: 7, name: "Valley Enterprises", totalPurchase: 580000, transactions: 20, avgOrder: 29000 },
      { rank: 8, name: "Coastal Trading", totalPurchase: 540000, transactions: 19, avgOrder: 28421 },
      { rank: 9, name: "Summit Retail", totalPurchase: 495000, transactions: 18, avgOrder: 27500 },
      { rank: 10, name: "Horizon Motors", totalPurchase: 460000, transactions: 16, avgOrder: 28750 }
    ];
  
    // Top Credited Customers Data
    const topCreditedCustomers = [
      { rank: 1, name: "ABC Electronics Ltd", creditAmount: 450000, dueDate: "Nov 15, 2025", status: "Good" },
      { rank: 2, name: "Tech Solutions Inc", creditAmount: 380000, dueDate: "Oct 28, 2025", status: "Due Soon" },
      { rank: 3, name: "Mega Wholesale", creditAmount: 325000, dueDate: "Oct 05, 2025", status: "Overdue" },
      { rank: 4, name: "Urban Traders", creditAmount: 280000, dueDate: "Nov 22, 2025", status: "Good" },
      { rank: 5, name: "Prime Distributors", creditAmount: 245000, dueDate: "Oct 18, 2025", status: "Due Soon" },
      { rank: 6, name: "Metro Sales Corp", creditAmount: 210000, dueDate: "Dec 01, 2025", status: "Good" },
      { rank: 7, name: "Eastern Imports", creditAmount: 195000, dueDate: "Sep 30, 2025", status: "Overdue" },
      { rank: 8, name: "Valley Enterprises", creditAmount: 175000, dueDate: "Nov 10, 2025", status: "Good" },
      { rank: 9, name: "Coastal Trading", creditAmount: 160000, dueDate: "Oct 25, 2025", status: "Due Soon" },
      { rank: 10, name: "Horizon Motors", creditAmount: 145000, dueDate: "Nov 18, 2025", status: "Good" }
    ];
  
    const customerStats = [
      {
        title: "Total Customers",
        value: "10",
        icon: Users,
        iconBg: "from-blue-500 to-cyan-500",
        subtitle: "Top performers"
      },
      {
        title: "Total Revenue",
        value: "৳7.23M",
        icon: TrendingUp,
        iconBg: "from-green-500 to-emerald-500",
        subtitle: "From top 10"
      }
    ];
  
    const creditStats = [
      {
        title: "Total Credit",
        value: "৳2.57M",
        icon: CreditCard,
        iconBg: "from-purple-500 to-violet-500",
        subtitle: "Outstanding amount"
      },
      {
        title: "Overdue",
        value: "৳520K",
        icon: AlertCircle,
        iconBg: "from-orange-500 to-red-500",
        subtitle: "2 customers"
      }
    ];
  
    return (
      <div className="min-h-screen">
        <div className="w-full space-y-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Customers Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4">
              <div className="flex justify-center items-center space-x-3">
                <Award className="w-7 h-7 text-white" />
                <h3 className="text-2xl font-bold text-white">Top Customers</h3>
              </div>
            </div>
  
            <div className="p-2 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {customerStats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
  
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                          Rank
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                          Customer Name
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">
                          Total Purchase
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                          Transactions
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">
                          Avg Order
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {topCustomers.map((customer, index) => (
                        <CustomerRow key={index} {...customer} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
  
          {/* Top Credited Customers Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-violet-600 px-8 py-4">
              <div className="flex justify-center items-center space-x-3">
                <CreditCard className="w-7 h-7 text-white" />
                <h3 className="text-2xl font-bold text-white">Top Credited Customers</h3>
              </div>
            </div>
  
            <div className="p-2 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {creditStats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
  
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                          Rank
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                          Customer Name
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">
                          Credit Amount
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                          Due Date
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {topCreditedCustomers.map((customer, index) => (
                        <CreditRow key={index} {...customer} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }