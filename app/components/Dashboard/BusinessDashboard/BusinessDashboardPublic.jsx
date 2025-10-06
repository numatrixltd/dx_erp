"use client"
import {
    Activity,
    ArrowDownRight,
    ArrowUpRight,
    BarChart3,
    CreditCard,
    DollarSign,
    Eye,
    ShoppingCart,
    TrendingDown,
    TrendingUp,
    Package
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function BusinessComponent() {

    const statsData = [
        {
            title: 'Today',
            value: 'BDT 0.0000',
            change: '0%',
            trend: 'neutral',
            previous: 'Yesterday: BDT 1,497,607.0000'
        },
        {
            title: 'This Week',
            value: 'BDT 0.0000',
            change: '0%',
            trend: 'neutral',
            previous: 'Last Week: BDT 1,497,607.0000'
        },
        {
            title: 'This Month',
            value: 'BDT 5,895,899.2104',
            change: '139%',
            trend: 'up',
            previous: 'Last Month: BDT 4,245,888.2000'
        },
        {
            title: 'This Year',
            value: 'BDT 21,727,679.9704',
            change: '0%',
            trend: 'up',
            previous: 'Last Year: BDT 0.0000'
        }
    ];

    const posData = [
        {
            title: 'Today',
            value: 'BDT 0.0000',
            change: '0%',
            trend: 'neutral',
            previous: 'Yesterday: BDT 10,635.0000'
        },
        {
            title: 'This Week',
            value: 'BDT 0.0000',
            change: '0%',
            trend: 'neutral',
            previous: 'Last Week: BDT 10,635.0000'
        },
        {
            title: 'This Month',
            value: 'BDT 35,280.0000',
            change: '244%',
            trend: 'up',
            previous: 'Last Month: BDT 262,627.7500'
        },
        {
            title: 'This Year',
            value: 'BDT 485,951.3500',
            change: '0%',
            trend: 'up',
            previous: 'Last Year: BDT 0.0000'
        }
    ];

    const purchaseData = [
        {
            title: 'Today',
            value: 'BDT 0.0000',
            change: '0%',
            trend: 'neutral',
            previous: 'Yesterday: BDT 1,301,384.0000'
        },
        {
            title: 'This Week',
            value: 'BDT 0.0000',
            change: '0%',
            trend: 'neutral',
            previous: 'Last Week: BDT 1,301,384.0000'
        },
        {
            title: 'This Month',
            value: 'BDT 9,864,490.0000',
            change: '1000+%',
            trend: 'down',
            previous: 'Last Month: BDT 301,811,695.8130'
        },
        {
            title: 'This Year',
            value: 'BDT 333,128,611.3130',
            change: '0%',
            trend: 'up',
            previous: 'Last Year: BDT 0.0000'
        }
    ];

    const latestTransactions = [
        { date: 'Sep 24, 2025', category: 'Sales', amount: 'BDT 400,000.0000', type: 'income' },
        { date: 'Sep 24, 2025', category: 'Sales', amount: 'BDT 750.0000', type: 'income' },
        { date: 'Sep 24, 2025', category: 'Sales', amount: 'BDT 50,000.0000', type: 'income' },
        { date: 'Sep 24, 2025', category: 'Sales', amount: 'BDT 10,500.0000', type: 'income' },
        { date: 'Sep 24, 2025', category: 'Discount Given', amount: 'BDT 0.0000', type: 'expense' }
    ];

    const StatCard = ({ title, value, change, trend, previous, gradient, iconBg, icon: Icon = Activity }) => {
        return (
            <div className="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative p-6">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                            <p className="text-lg font-bold text-gray-900 leading-tight my-2">{value}</p>
                            <div className={`inline-flex items-center text-white justify-center w-8 h-8 rounded-xl bg-gradient-to-r ${iconBg} shadow-lg`}>
                               VS
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 ">
                            {trend === 'up' ? (
                                <div className="flex items-center space-x-1 bg-emerald-100 text-emerald-700 px-4 py-4 rounded-full">
                                    <ArrowUpRight className="w-3 h-3" />
                                    <span className="text-xs font-semibold">{change}</span>
                                </div>
                            ) : trend === 'down' ? (
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
        <div className="min-h-screen md:bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-2 ">
            <div className="container mx-auto space-y-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        Financial Dashboard
                    </h1>
                    <p className="text-gray-600">Real-time business analytics and insights</p>
                </div>

                {/* Stats Overview */}
                  <div className="bg-gradient-to-r from-blue-500 to-red-600 px-8 py-3 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <CreditCard className="w-7 h-7 text-white" />
                                <h3 className="text-2xl font-bold text-white">Sales</h3>
                            </div>
                            <p className="text-indigo-100 mt-2">Track your Sales performance metrics</p>
                        </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statsData.map((stat, index) => (
                        <StatCard
                            key={index}
                            {...stat}
                            gradient={
                                index === 0 ? 'from-blue-500 to-cyan-500' :
                                    index === 1 ? 'from-emerald-500 to-teal-500' :
                                        index === 2 ? 'from-purple-500 to-pink-500' :
                                            'from-orange-500 to-red-500'
                            }
                            iconBg={
                                index === 0 ? 'from-blue-500 to-cyan-500' :
                                    index === 1 ? 'from-emerald-500 to-teal-500' :
                                        index === 2 ? 'from-purple-500 to-pink-500' :
                                            'from-orange-500 to-red-500'
                            }
                            icon={
                                index === 0 ? DollarSign :
                                    index === 1 ? TrendingUp :
                                        index === 2 ? BarChart3 :
                                            Activity
                            }
                        />
                    ))}
                </div>

                {/* POS Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:gap-10">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden col-span-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3">
                            <div className="flex items-center space-x-3">
                                <CreditCard className="w-7 h-7 text-white" />
                                <h3 className="text-2xl font-bold text-white">POS</h3>
                            </div>
                            <p className="text-indigo-100 mt-2">Track your POS performance metrics</p>
                        </div>
                        <div className="p-2 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                {posData.map((stat, index) => (
                                    <StatCard
                                        key={index}
                                        {...stat}
                                        gradient={
                                            index === 0 ? 'from-orange-500 to-amber-500' :
                                                index === 1 ? 'from-blue-500 to-indigo-500' :
                                                    index === 2 ? 'from-green-500 to-emerald-500' :
                                                        'from-pink-500 to-rose-500'
                                        }
                                        iconBg={
                                            index === 0 ? 'from-orange-500 to-amber-500' :
                                                index === 1 ? 'from-blue-500 to-indigo-500' :
                                                    index === 2 ? 'from-green-500 to-emerald-500' :
                                                        'from-pink-500 to-rose-500'
                                        }
                                        icon={CreditCard}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Purchase Section */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden w-full">
                        <SalesAnalytics />
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:gap-10">
                    <div className="col-span-2 space-y-8">
                        <SalesDashboard />
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-3">
                                <div className="flex items-center space-x-3">
                                    <ShoppingCart className="w-7 h-7 text-white" />
                                    <h3 className="text-2xl font-bold text-white">Purchase Analytics</h3>
                                </div>
                                <p className="text-emerald-100 mt-2">Monitor your procurement expenses</p>
                            </div>
                            <div className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                    {purchaseData.map((stat, index) => (
                                        <StatCard
                                            key={index}
                                            {...stat}
                                            gradient={
                                                index === 0 ? 'from-purple-500 to-violet-500' :
                                                    index === 1 ? 'from-orange-500 to-yellow-500' :
                                                        index === 2 ? 'from-blue-500 to-cyan-500' :
                                                            'from-red-500 to-pink-500'
                                            }
                                            iconBg={
                                                index === 0 ? 'from-purple-500 to-violet-500' :
                                                    index === 1 ? 'from-orange-500 to-yellow-500' :
                                                        index === 2 ? 'from-blue-500 to-cyan-500' :
                                                            'from-red-500 to-pink-500'
                                            }
                                            icon={ShoppingCart}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <StockAnalytics />
                    </div>

                </div>

                {/* Purchase Section */}

            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 space-y-4 md:gap-8 py-10">
                {/* Total Receivables */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden col-span-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-5 flex items-center justify-between">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 text-center border border-emerald-200">
                                <div className="bg-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-sm text-emerald-700 font-semibold mb-2">Current</p>
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
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-5 flex items-center justify-between">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 text-center border border-blue-200">
                                <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <BarChart3 className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-sm text-blue-700 font-semibold mb-2">Current</p>
                                <p className="text-xl font-bold text-blue-800">৳ 0.0000</p>
                                <p className="text-xs text-blue-600 mt-1">(This Month)</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-6 text-center border border-purple-200">
                                <div className="bg-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Activity className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-sm text-purple-700 font-semibold mb-2">Overdue</p>
                                <p className="text-xl font-bold text-purple-800">৳ 0.0030</p>
                                <p className="text-xs text-purple-600 mt-1">(Previous Months)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Transactions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-6">
                    <div className="flex items-center space-x-3">
                        <Activity className="w-7 h-7 text-white" />
                        <h3 className="text-2xl font-bold text-white">Latest Income Transactions</h3>
                    </div>
                    <p className="text-violet-100 mt-2">Recent financial activities</p>
                </div>
                <div className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                                <tr>
                                    <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Date</th>
                                    <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Category</th>
                                    <th className="px-8 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {latestTransactions.map((transaction, index) => (
                                    <tr key={index} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200">
                                        <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {transaction.date}
                                        </td>
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <span className={`inline-flex px-4 py-2 text-xs font-bold rounded-full ${transaction.category === 'Sales'
                                                ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200'
                                                : 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border border-yellow-200'
                                                }`}>
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
            </div>
        </div>
        // </div >
    );
};


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
        { model: 'A511', volume: 3, value: 334650 },
        { model: 'AIDUO Q613', volume: 1, value: 92930 },
        { model: 'MYC', volume: 1, value: 128000 },
        { model: 'MYC (Motor: 800W & Battery: 60V23AH)', volume: 7, value: 716100 }
    ];

    const salesTotal = { volume: 12, value: 1271680 };

    const salesStats = [
        { title: 'Total Models', value: '4', icon: Package, iconBg: 'from-blue-500 to-cyan-500' },
        { title: 'Total Volume', value: salesTotal.volume.toString(), icon: BarChart3, iconBg: 'from-green-500 to-emerald-500' },
        { title: 'Total Value', value: `$${salesTotal.value.toLocaleString()}`, icon: TrendingUp, iconBg: 'from-purple-500 to-violet-500' },
        { title: 'Avg per Unit', value: `$${Math.round(salesTotal.value / salesTotal.volume).toLocaleString()}`, icon: ShoppingCart, iconBg: 'from-orange-500 to-red-500' }
    ];

    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4">
                <div className="flex items-center space-x-3">
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
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Model</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">Volume</th>
                                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">Value</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {salesData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 text-sm text-gray-800">{item.model}</td>
                                        <td className="px-4 py-3 text-sm text-center text-gray-600">{item.volume}</td>
                                        <td className="px-4 py-3 text-sm text-right text-gray-800">${item.value.toLocaleString()}</td>
                                    </tr>
                                ))}
                                <tr className="bg-gray-50 font-semibold border-t-2 border-gray-200">
                                    <td className="px-4 py-3 text-sm text-gray-800">Total</td>
                                    <td className="px-4 py-3 text-sm text-center text-gray-800">{salesTotal.volume}</td>
                                    <td className="px-4 py-3 text-sm text-right text-gray-800">${salesTotal.value.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};


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

const TableRow = ({ model, quantity, value, thisMonthQty, thisMonthValue, wos, isTotal = false }) => (
    <tr className={`${isTotal ? 'bg-gray-50 font-semibold border-t-2 border-gray-200' : 'hover:bg-gray-50'} transition-colors`}>
        <td className="px-4 py-3 text-sm text-gray-800">{model}</td>
        <td className="px-4 py-3 text-sm text-center text-gray-600">{quantity}</td>
        <td className="px-4 py-3 text-sm text-right text-gray-800">${value.toLocaleString()}</td>
        <td className="px-4 py-3 text-sm text-center text-gray-600">{thisMonthQty}</td>
        <td className="px-4 py-3 text-sm text-right text-gray-800">${thisMonthValue.toLocaleString()}</td>
        <td className="px-4 py-3 text-sm text-center text-gray-600">{wos}</td>
    </tr>
);

const StockAnalytics = () => {
    // Stock data from the image
    const stockData = [
        { model: 'A511', quantity: 92, value: 6597765, thisMonthQty: 3, thisMonthValue: 334650, wos: 122.67 },
        { model: 'AIDUO Q613', quantity: 10, value: 681030, thisMonthQty: 1, thisMonthValue: 92930, wos: 40 },
        { model: 'F520', quantity: 141, value: 8573862, thisMonthQty: 0, thisMonthValue: 0, wos: 0 },
        { model: 'MOK', quantity: 11, value: 914285, thisMonthQty: 0, thisMonthValue: 0, wos: 0 },
        { model: 'MYC', quantity: 9, value: 782603, thisMonthQty: 1, thisMonthValue: 128000, wos: 36 },
        { model: 'MYC (Motor: 800W & Battery: 60V23AH)', quantity: 23, value: 1596028, thisMonthQty: 7, thisMonthValue: 716100, wos: 13.14 },
        { model: 'MYY', quantity: 8, value: 682550, thisMonthQty: 0, thisMonthValue: 0, wos: 0 },
        { model: 'Warrior F626', quantity: 8, value: 676050, thisMonthQty: 0, thisMonthValue: 0, wos: 0 }
    ];

    const stockTotal = { quantity: 302, value: 20504173, thisMonthQty: 12, thisMonthValue: 1271680 };

    const stockStats = [
        { title: 'Total Models', value: '8', icon: Package, iconBg: 'from-blue-500 to-cyan-500' },
        { title: 'Total Quantity', value: stockTotal.quantity.toString(), icon: BarChart3, iconBg: 'from-green-500 to-emerald-500' },
        { title: 'Stock Value', value: `$${(stockTotal.value / 1000000).toFixed(1)}M`, icon: TrendingUp, iconBg: 'from-purple-500 to-violet-500' },
        { title: 'Monthly Sales', value: `$${(stockTotal.thisMonthValue / 1000).toFixed(0)}K`, icon: ShoppingCart, iconBg: 'from-orange-500 to-red-500' }
    ];

    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-4">
                <div className="flex items-center space-x-3">
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
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Model</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">Quantity</th>
                                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">Value</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">This Month Qty</th>
                                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">This Month Value</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase">WOS</th>
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


export function SalesDashboard() {
    const data = [
        { name: 'A511', value: 340000, color: '#3b82f6' },
        { name: 'AIDUO Q613', value: 100000, color: '#10b981' },
        { name: 'MYC (Motor: 800W & Battery: 60V23AH)', value: 130000, color: '#f59e0b' },
        { name: 'MYC', value: 701680, color: '#f97316' }
    ];

    const totalSales = data.reduce((sum, item) => sum + item.value, 0);

    const formatYAxis = (value) => {
        return value.toLocaleString();
    };

    const CustomBar = (props) => {
        const { fill, x, y, width, height, payload } = props;
        return (
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={payload.color}
                rx={4}
            />
        );
    };

    return (
        <div className="w-full  mx-auto p-4 bg-white rounded-3xl shadow-xl">
            <div className="text-center mb-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Total Sales Value
                </h2>
                <p className="text-4xl font-bold text-gray-900">
                    {totalSales.toLocaleString()}
                </p>
            </div>

            <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                        dataKey="name"
                        angle={-15}
                        textAnchor="end"
                        height={100}
                        interval={0}
                        tick={{ fill: '#6b7280', fontSize: 12 }}
                    />
                    <YAxis
                        tickFormatter={formatYAxis}
                        tick={{ fill: '#6b7280', fontSize: 12 }}
                        domain={[0, 800000]}
                        ticks={[0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000]}
                    />
                    <Tooltip
                        formatter={(value) => value.toLocaleString()}
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '6px',
                            padding: '8px 12px'
                        }}
                    />
                    <Legend
                        wrapperStyle={{ paddingTop: '20px' }}
                        iconType="square"
                        formatter={() => 'undefined'}
                    />
                    <Bar
                        dataKey="value"
                        shape={<CustomBar />}
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
