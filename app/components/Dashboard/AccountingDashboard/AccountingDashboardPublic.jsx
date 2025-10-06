import { useState } from 'react';
import {
    Settings,
    User,
    Calendar,
    Database,
    CreditCard,
    DollarSign,
    TrendingUp,
    Wallet,
    FileText,
    Bitcoin
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function AccountingDashboard() {
    const [dateFrom, setDateFrom] = useState('2025-01-01');
    const [dateTo, setDateTo] = useState('2025-10-06');
    const [activeTab, setActiveTab] = useState('cash');

    const summaryCards = [
        {
            title: 'Income',
            amount: '৳ 74,709,544.19',
            subAmount: '৳ 5,767,840.00',
            date: 'Oct, 2025',
            icon: Database,
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Expense',
            amount: '৳ 3,643,425,438.90',
            subAmount: '৳ 1,605,191,982.69',
            date: 'Oct, 2025',
            icon: CreditCard,
            bgColor: 'bg-red-100',
            iconColor: 'text-red-600'
        },
        {
            title: 'Profit',
            amount: '৳ -3,568,715,894.72',
            subAmount: '৳ -1,599,424,142.69',
            date: 'Oct, 2025',
            icon: DollarSign,
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600'
        },
        {
            title: 'Customer Payments Expectations',
            amount: '৳ 12,985,876,342.77',
            subAmount: '৳ 12,985,876,342.77',
            date: 'Oct, 2025',
            icon: FileText,
            bgColor: 'bg-purple-100',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Supplier Payments Expectations',
            amount: '৳ 8,775,439,779.30',
            subAmount: '৳ 8,775,439,779.30',
            date: 'Oct, 2025',
            icon: Wallet,
            bgColor: 'bg-teal-100',
            iconColor: 'text-teal-600'
        },
        {
            title: 'Upcoming',
            amount: '৳ 4,210,436,563.46',
            subAmount: '৳ 4,210,436,563.46',
            date: 'Oct, 2025',
            icon: Bitcoin,
            bgColor: 'bg-yellow-100',
            iconColor: 'text-yellow-600'
        }
    ];

    const incomeData = [
        { name: 'Sales', value: 95.1, amount: 65500000, color: '#5DCECD' },
        { name: 'Discount Given', value: 1.7, amount: 1200000, color: '#86C6C5' },
        { name: 'Additional Income', value: 1.2, amount: 850000, color: '#FFB366' },
        { name: 'manufacturing 1', value: 1.4, amount: 950000, color: '#FFD966' },
        { name: 'Monthly Net service', value: 0.6, amount: 388701, color: '#B8D966' },
        { name: 'RK Tower rent received', value: 0.0, amount: 0, color: '#8EDFFF' }
    ];

    const expenseData = [
        { name: 'Payroll – Salary & Wages', value: 45.5, amount: 945000000, color: '#FF9999' },
        { name: 'Bank Service Charges', value: 22.7, amount: 12500000, color: '#6FB3E0' },
        { name: 'Uncategorized Expense', value: 13.6, amount: 26633777, color: '#E74C8C' },
        { name: 'Computer – Hardware', value: 9.1, amount: 8750000, color: '#C77DFF' },
        { name: 'Computer – Internet', value: 4.5, amount: 5000000, color: '#FFB347' },
        { name: 'Comp', value: 4.5, amount: 4500000, color: '#FFE66D' }
    ];

    const latestIncomes = [
        { date: 'Oct 5, 2025', category: 'Sales', amount: '৳ 100.00' },
        { date: 'Oct 5, 2025', category: 'Sales', amount: '৳ 100.00' },
        { date: 'Oct 5, 2025', category: 'Sales', amount: '৳ 100.00' },
        { date: 'Oct 5, 2025', category: 'Sales', amount: '৳ 400.00' },
        { date: 'Oct 5, 2025', category: 'Sales', amount: '৳ 1,020.00' },
        { date: 'Oct 5, 2025', category: 'Sales', amount: '৳ 600.00' },
        { date: 'Oct 5, 2025', category: 'Sales', amount: '৳ 20.00' },
        { date: 'Oct 5, 2025', category: 'Sales', amount: '৳ 120,000.00' },
        { date: 'Oct 5, 2025', category: 'Sales', amount: '৳ 187.00' },
        { date: 'Oct 2, 2025', category: 'Sales', amount: '৳ 64,500.00' }
    ];

    const latestExpenses = [
        { date: 'Oct 5, 2025', category: 'Adjustment', amount: '৳ 50.00' },
        { date: 'Oct 5, 2025', category: 'Cost of Goods Sold', amount: '৳ 50.00' },
        { date: 'Oct 5, 2025', category: 'Adjustment', amount: '৳ 0.00' },
        { date: 'Oct 5, 2025', category: 'Cost of Goods Sold', amount: '৳ 50.00' },
        { date: 'Oct 5, 2025', category: 'Adjustment', amount: '৳ 0.00' },
        { date: 'Oct 5, 2025', category: 'Cost of Goods Sold', amount: '৳ 50.00' },
        { date: 'Oct 5, 2025', category: 'Cost of Goods Sold', amount: '৳ 240.00' },
        { date: 'Oct 5, 2025', category: 'Adjustment', amount: '৳ 0.00' },
        { date: 'Oct 5, 2025', category: 'Adjustment', amount: '৳ 100.00' },
        { date: 'Oct 5, 2025', category: 'Cost of Goods Sold', amount: '৳ 795.91' }
    ];

    const cashAccounts = [
        { name: 'Cash on Hand', amount: '৳ 3,475,978.00' },
        { name: 'Gulistan Cash', amount: '৳ 99,445.00' },
        { name: 'Dinajpur Cash', amount: '৳ -50,000.00' },
        { name: 'Bandar Cash', amount: '৳ 509,300.00' },
        { name: 'Cash Speednet', amount: '৳ 452,723.00' },
        { name: 'Bogura New Cash', amount: '৳ 3,042.50' }
    ];

    const bankAccounts = [
        { name: 'DBBL - Main Account', amount: '৳ 5,234,567.00' },
        { name: 'City Bank - Corporate', amount: '৳ 2,456,789.00' },
        { name: 'IFIC Bank - Savings', amount: '৳ 1,234,500.00' },
        { name: 'Islami Bank - Current', amount: '৳ -125,000.00' },
        { name: 'Standard Chartered', amount: '৳ 3,567,890.00' },
        { name: 'Prime Bank - Business', amount: '৳ 890,456.00' }
    ];

    const mobileBankAccounts = [
        { name: 'bKash - Personal', amount: '৳ 234,567.00' },
        { name: 'bKash - Merchant', amount: '৳ 456,789.00' },
        { name: 'Nagad - Agent', amount: '৳ 123,456.00' },
        { name: 'Rocket - DBBL', amount: '৳ 78,900.00' },
        { name: 'Upay - Business', amount: '৳ 45,678.00' }
    ];

    const getAccountsByTab = () => {
        switch(activeTab) {
            case 'cash':
                return cashAccounts;
            case 'bank':
                return bankAccounts;
            case 'mobile':
                return mobileBankAccounts;
            default:
                return cashAccounts;
        }
    };

    const renderCustomLabel = (entry) => {
        return `${entry.value}%`;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>Home</span>
                        <span>›</span>
                        <span className="text-gray-900">Accounting Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Title and Filters */}
            <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900">Accounting Dashboard</h1>
                    <div className="flex items-center space-x-3">
                        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Custom</option>
                            <option>Today</option>
                            <option>This Week</option>
                            <option>This Month</option>
                        </select>
                        <div className="flex items-center space-x-2">
                            <input
                                type="date"
                                value={dateFrom}
                                onChange={(e) => setDateFrom(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Calendar className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="date"
                                value={dateTo}
                                onChange={(e) => setDateTo(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Calendar className="w-5 h-5 text-gray-400" />
                        </div>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                            Apply Filter
                        </button>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {summaryCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-gray-700 mb-2">{card.title}</h3>
                                        <p className="text-xl font-bold text-gray-900 mb-1">{card.amount}</p>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            <span>{card.date}</span>
                                            <span className="mx-2">৳</span>
                                            <span>{card.subAmount}</span>
                                        </div>
                                    </div>
                                    <div className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center`}>
                                        <Icon className={`w-6 h-6 ${card.iconColor}`} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Income By Category */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="bg-blue-50 px-6 py-3 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Income By Category</h2>
                        </div>
                        <div className="p-6">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={incomeData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomLabel}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {incomeData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="mt-4">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Category</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {incomeData.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                                            <span className="text-xs text-gray-700">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expense Breakdown */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="bg-gray-700 px-6 py-3 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-white">Expense Breakdown</h2>
                        </div>
                        <div className="p-6">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={expenseData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomLabel}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {expenseData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="mt-4">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Category</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {expenseData.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                                            <span className="text-xs text-gray-700">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transaction Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Latest Incomes */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="bg-blue-600 px-6 py-3">
                            <h2 className="text-lg font-semibold text-white">Latest Incomes</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                                        <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {latestIncomes.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 text-sm text-gray-700">{item.date}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">{item.category}</td>
                                            <td className="px-4 py-3 text-sm text-gray-900 text-right font-medium">{item.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Latest Expenses */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="bg-gray-700 px-6 py-3">
                            <h2 className="text-lg font-semibold text-white">Latest Expenses</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                                        <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {latestExpenses.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 text-sm text-gray-700">{item.date}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">{item.category}</td>
                                            <td className="px-4 py-3 text-sm text-gray-900 text-right font-medium">{item.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Cash Accounts */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="border-b border-gray-200">
                        <div className="flex space-x-6 px-6">
                            <button 
                                onClick={() => setActiveTab('cash')}
                                className={`py-3 border-b-2 font-medium flex items-center transition-colors cursor-pointer ${
                                    activeTab === 'cash' 
                                        ? 'border-blue-600 text-blue-600' 
                                        : 'border-transparent text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <User className="w-4 h-4 mr-2" />
                                CASH
                            </button>
                            <button 
                                onClick={() => setActiveTab('bank')}
                                className={`py-3 border-b-2 font-medium flex items-center transition-colors cursor-pointer ${
                                    activeTab === 'bank' 
                                        ? 'border-blue-600 text-blue-600' 
                                        : 'border-transparent text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <Wallet className="w-4 h-4 mr-2" />
                                BANK
                            </button>
                            <button 
                                onClick={() => setActiveTab('mobile')}
                                className={`py-3 border-b-2 font-medium flex items-center transition-colors cursor-pointer ${
                                    activeTab === 'mobile' 
                                        ? 'border-blue-600 text-blue-600' 
                                        : 'border-transparent text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <CreditCard className="w-4 h-4 mr-2" />
                                MOBILE BANK
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Account</th>
                                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {getAccountsByTab().map((account, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm text-blue-600 font-medium">{account.name}</td>
                                        <td className={`px-6 py-4 text-sm text-right font-semibold ${
                                            account.amount.includes('-') ? 'text-red-600' : 'text-gray-900'
                                        }`}>
                                            {account.amount}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}