import Header from "./header";
import MetricCard from "./metricCard";
import Monitoring from "./monitoring";
import Maintenance from "./maintenance";
export default function Dashboard() {
  return (
    <main className="flex flex-col gap-4 ">
      <Header />
      <MetricCard />
      <Monitoring />
      <Maintenance />
    </main>
  );
}