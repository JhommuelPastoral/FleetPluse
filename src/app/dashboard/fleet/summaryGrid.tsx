import QuickActions from "@/components/dashboard/fleet/quickActions";
import FleetChart from "@/components/dashboard/fleet/chart";
import UpcomingMaintenance from "@/components/dashboard/fleet/upcomingMaintenance";
export default function SummaryGrid() {
  return (
    <section className="flex flex-col sticky top-0 gap-2">
      <QuickActions />
      <FleetChart />
      <UpcomingMaintenance />
    </section>
  );
}