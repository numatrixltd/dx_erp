"use client";
import { setEnvironment } from "@/lib/features/environment/environmentSlice";
import {
  setActiveSection,
  setIsMobile,
  setSidebarOpen,
  toggleDashboardDropdown,
} from "@/lib/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  ChevronDown,
  Home,
  Menu,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import AccountingComponent from "./AccountingDashboard/AccountingDashboardPublic";
import BusinessComponent from "./BusinessDashboard/BusinessDashboardPublic";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { sidebarOpen, activeSection, dashboardDropdownOpen, isMobile } =
    useAppSelector((state) => state.ui);
  const { selectedEnvironment, environments } = useAppSelector(
    (state) => state.environment
  );
  const [envDropdownOpen, setEnvDropdownOpen] = useState(false);

  // Detect screen size and handle responsive behavior
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768;
      const wasMobile = isMobile;
      dispatch(setIsMobile(mobile));
      // On initial load or switching from mobile to desktop, open sidebar
      if (!mobile && wasMobile && window.innerWidth >= 768) {
        dispatch(setSidebarOpen(true));
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [isMobile, dispatch]);

  const sidebarItems = [
    {
      name: "Dashboard",
      icon: Home,
      dropdown: true,
      children: [
        { name: "Business Dashboard", section: "Business Dashboard" },
        { name: "Accounting Dashboard", section: "Accounting Dashboard" },
      ],
    },
  ];

  const handleSectionChange = (section) => {
    dispatch(setActiveSection(section));
    // Close sidebar on mobile after selection
    if (isMobile) {
      dispatch(setSidebarOpen(false));
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Business Dashboard":
        return <BusinessComponent />;
      case "Accounting Dashboard":
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
          onClick={() => dispatch(setSidebarOpen(false))}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-gradient-to-br from-slate-800 to-red-900 transition-all duration-300 ease-in-out flex flex-col z-50
                ${
                  isMobile
                    ? `fixed left-0 top-0 h-full ${
                        sidebarOpen ? "translate-x-0" : "-translate-x-full"
                      } w-64`
                    : `relative ${sidebarOpen ? "w-64" : "w-20"}`
                }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <h1
            className={`text-lg font-bold text-white transition-all duration-300 
                        ${
                          sidebarOpen || isMobile
                            ? "opacity-100"
                            : "opacity-0 hidden"
                        }`}
          >
            DX ERP Dashboard
          </h1>
          <button
            onClick={() => dispatch(setSidebarOpen(!sidebarOpen))}
            className="text-gray-300 hover:text-white p-1"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
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
                      dispatch(toggleDashboardDropdown());
                    }
                  }}
                  className={`w-full flex items-center px-3 py-3 text-left rounded-lg transition-all duration-200
                                        ${
                                          dashboardDropdownOpen &&
                                          activeSection === "Business"
                                            ? "bg-gradient-to-br from-slate-800 to-red-900 text-white shadow-lg"
                                            : "text-gray-300 hover:bg-slate-700 hover:text-white"
                                        }`}
                >
                  <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span
                    className={`transition-opacity duration-300 ${
                      sidebarOpen || isMobile
                        ? "opacity-100"
                        : "opacity-0 hidden"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>

                {/* Dropdown Items */}
                {item.dropdown &&
                  dashboardDropdownOpen &&
                  (sidebarOpen || isMobile) && (
                    <div className="ml-8 mt-2 flex flex-col space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => handleSectionChange(child.section)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-200 cursor-pointer
                                                    ${
                                                      activeSection ===
                                                      child.section
                                                        ? "bg-gradient-to-tr from-slate-800 to-red-900 text-white shadow"
                                                        : ""
                                                    }`}
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
                onClick={() => dispatch(setSidebarOpen(true))}
                className="text-gray-600 hover:text-gray-900 p-1 md:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
            <h2 className="text-lg md:text-2xl font-bold bg-gradient-to-br from-slate-400 to-red-600 bg-clip-text text-transparent">
              {activeSection}
            </h2>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* <div className="hidden sm:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">
                2025-01-01 - 2025-09-28
              </span>
            </div>
            
            <div className="sm:hidden flex items-center space-x-1 bg-gray-100 rounded-lg px-2 py-1">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-xs text-gray-600">2025</span>
            </div> */}

            {/* Environment Selector */}
            <div className="relative">
              <button
                onClick={() => setEnvDropdownOpen(!envDropdownOpen)}
                className="flex items-center space-x-2 bg-gradient-to-br from-slate-800 to-red-900 text-white px-4 py-2 rounded-lg hover:from-slate-600 hover:to-red-700 transition-all duration-200"
              >
                <span className="text-sm font-medium">
                  {environments.find((e) => e.id === selectedEnvironment)
                    ?.name || "SD"}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {envDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  {environments.map((env) => (
                    <button
                      key={env.id}
                      onClick={() => {
                        dispatch(setEnvironment(env.id));
                        setEnvDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        selectedEnvironment === env.id
                          ? "bg-gradient-to-br from-slate-800 to-red-900 text-white font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {env.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-red-900 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
