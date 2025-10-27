
import {
    Eye,
    TrendingDown,
    TrendingUp
} from "lucide-react";

const TotalSalesReturn = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden col-span-2">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-5 flex items-center justify-center gap-6">
            <div className="flex justify-center items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Total Sales Returnable
              </h3>
            </div>
            <Eye className="w-5 h-5 text-blue-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8">
              <div className="text-center mb-8">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  ৳ 2,186,303.14
                </p>
                <p className="text-gray-600 font-medium">Total Payable Memos</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 text-center border border-emerald-200">
                  <div className="bg-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-emerald-700 font-semibold mb-2">
                    Current
                  </p>
                  <p className="text-xl font-bold text-emerald-800">
                    ৳ 219,604.44
                  </p>
                  <p className="text-xs text-emerald-600 mt-1">(This Month)</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-6 text-center border border-red-200">
                  <div className="bg-red-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-red-700 font-semibold mb-2">
                    Overdue
                  </p>
                  <p className="text-xl font-bold text-red-800">
                    ৳ 1,966,698.70
                  </p>
                  <p className="text-xs text-red-600 mt-1">(Previous Months)</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  ৳ 2,186,303.14
                </p>
                <p className="text-gray-600 font-medium">Total Applied Memos</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 text-center border border-emerald-200">
                  <div className="bg-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-emerald-700 font-semibold mb-2">
                    Current
                  </p>
                  <p className="text-xl font-bold text-emerald-800">
                    ৳ 219,604.44
                  </p>
                  <p className="text-xs text-emerald-600 mt-1">(This Month)</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-6 text-center border border-red-200">
                  <div className="bg-red-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-red-700 font-semibold mb-2">
                    Overdue
                  </p>
                  <p className="text-xl font-bold text-red-800">
                    ৳ 1,966,698.70
                  </p>
                  <p className="text-xs text-red-600 mt-1">(Previous Months)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TotalSalesReturn
