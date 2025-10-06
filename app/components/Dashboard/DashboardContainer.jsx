"use client"
import {
    Building2,
    Calculator,
    Calendar,
    Home,
    Menu,
    X,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import AccountingComponent from './AccountingDashboard/AccountingDashboardPublic';
import BusinessComponent from './BusinessDashboard/BusinessDashboardPublic';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false); // Closed by default for mobile-first
    const [activeSection, setActiveSection] = useState('Business');
    const [dashboardDropdownOpen, setDashboardDropdownOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size and handle responsive behavior
    useEffect(() => {
    const checkIsMobile = () => {
        const mobile = window.innerWidth < 768;
        const wasMobile = isMobile;
        setIsMobile(mobile);
        // On initial load or switching from mobile to desktop, open sidebar
        if (!mobile && wasMobile && window.innerWidth >= 768) {
            setSidebarOpen(true);
        }
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
}, [isMobile]);

    const sidebarItems = [
        {
            name: 'Dashboard',
            icon: Home,
            dropdown: true,
            children: [
                { name: 'Business Dashboard', section: 'Business' },
                { name: 'Accounting Dashboard', section: 'Accounting' }
            ]
        },
    ];

    const handleSectionChange = (section) => {
        setActiveSection(section);
        // Close sidebar on mobile after selection
        if (isMobile) {
            setSidebarOpen(false);
        }
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'Business':
                return <BusinessComponent />;
            case 'Accounting':
                return <AccountingComponent />;
            default:
                return <BusinessComponent />;
        }
    };

    return (
        <div className="flex min-h-screen relative">
            {/* Mobile Backdrop Overlay */}
            {isMobile && sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`bg-gradient-to-br from-slate-800 to-red-900 transition-all duration-300 ease-in-out flex flex-col z-50
                ${isMobile 
                    ? `fixed left-0 top-0 h-full ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64`
                    : `relative ${sidebarOpen ? 'w-64' : 'w-20'}`
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
                    <h1
                        className={`text-xl font-bold text-white transition-all duration-300 
                        ${(sidebarOpen || isMobile) ? 'opacity-100' : 'opacity-0 hidden'}`}
                    >
                        DX ERP
                    </h1>
                     <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-gray-300 hover:text-white p-1"
                    >
                        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        
                    </button>
                </div>

                {/* Sidebar Navigation */}
                <nav className="mt-8 px-2 flex-1 overflow-y-auto">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.name} className="mb-2">
                                <button
                                    onClick={() => {
                                        if (item.dropdown) {
                                            setDashboardDropdownOpen(!dashboardDropdownOpen);
                                        }
                                    }}
                                    className={`w-full flex items-center px-3 py-3 text-left rounded-lg transition-all duration-200
                                        ${dashboardDropdownOpen && activeSection === 'Business' ? 'bg-gradient-to-br from-slate-800 to-red-900 text-white shadow-lg' : 'text-gray-300 hover:bg-slate-700 hover:text-white'}`}
                                >
                                    <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                                    <span className={`transition-opacity duration-300 ${(sidebarOpen || isMobile) ? 'opacity-100' : 'opacity-0 hidden'}`}>
                                        {item.name}
                                    </span>
                                </button>

                                {/* Dropdown Items */}
                                {item.dropdown && dashboardDropdownOpen && (sidebarOpen || isMobile) && (
                                    <div className="ml-8 mt-2 flex flex-col space-y-1">
                                        {item.children.map((child) => (
                                            <button
                                                key={child.name}
                                                onClick={() => handleSectionChange(child.section)}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-200
                                                    ${activeSection === child.section ? 'bg-gradient-to-tr from-slate-800 to-red-900 text-white shadow' : ''}`}
                                            >
                                                {child.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-6">
                    <div className="flex items-center space-x-3">
                        {/* Mobile menu button */}
                        {isMobile && (
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="text-gray-600 hover:text-gray-900 p-1 md:hidden"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        )}
                        <h2 className="text-lg md:text-xl font-semibold text-gray-900">{activeSection}</h2>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <div className="hidden sm:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                            <Calendar className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-600">2025-01-01 - 2025-09-28</span>
                        </div>
                        {/* Mobile date display (shortened) */}
                        <div className="sm:hidden flex items-center space-x-1 bg-gray-100 rounded-lg px-2 py-1">
                            <Calendar className="w-4 h-4 text-gray-600" />
                            <span className="text-xs text-gray-600">2025</span>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">U</span>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-auto p-4 md:p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;