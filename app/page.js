import Image from "next/image";
import Dashboard from "./components/Dashboard/DashboardContainer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Dashboard />
    </div>
  );
}
