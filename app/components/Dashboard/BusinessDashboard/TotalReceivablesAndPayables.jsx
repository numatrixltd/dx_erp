import {
    Activity,
    BarChart3,
    Eye,
    TrendingDown,
    TrendingUp
} from "lucide-react";

const TotalReceivablesAndPayables = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 space-y-4 md:gap-8 py-10">
      {/* Total Receivables */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-5 flex items-center justify-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Total Receivables</h3>
          </div>
          <Eye className="w-5 h-5 text-blue-200" />
        </div>
        <div className="p-8">
          <div className="text-center mb-8">
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              ৳ 2,186,303.14
            </p>
            <p className="text-gray-600 font-medium">Total Unpaid Invoices</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 text-center border border-emerald-200">
              <div className="bg-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-emerald-700 font-semibold mb-2">
                Current
              </p>
              <p className="text-xl font-bold text-emerald-800">৳ 219,604.44</p>
              <p className="text-xs text-emerald-600 mt-1">(This Month)</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-6 text-center border border-red-200">
              <div className="bg-red-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-red-700 font-semibold mb-2">Overdue</p>
              <p className="text-xl font-bold text-red-800">৳ 1,966,698.70</p>
              <p className="text-xs text-red-600 mt-1">(Previous Months)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Total Payables */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-5 flex items-center justify-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Total Payables</h3>
          </div>
          <Eye className="w-5 h-5 text-orange-200" />
        </div>
        <div className="p-8">
          <div className="text-center mb-8">
            <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
              ৳ 0.0030
            </p>
            <p className="text-gray-600 font-medium">Total Unpaid Bills</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 text-center border border-blue-200">
              <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-blue-700 font-semibold mb-2">
                Current
              </p>
              <p className="text-xl font-bold text-blue-800">৳ 0.0000</p>
              <p className="text-xs text-blue-600 mt-1">(This Month)</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-6 text-center border border-purple-200">
              <div className="bg-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-purple-700 font-semibold mb-2">
                Overdue
              </p>
              <p className="text-xl font-bold text-purple-800">৳ 0.0030</p>
              <p className="text-xs text-purple-600 mt-1">(Previous Months)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalReceivablesAndPayables;
