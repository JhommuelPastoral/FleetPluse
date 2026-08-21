import VehicleGrid from "@/components/dashboard/fleet/vehicleGrid";
import SummaryGrid from "./summaryGrid";
export default function Overview() {
  return (
    <div className="grid md:grid-cols-[2fr_1fr] gap-2 relative items-start">
      <VehicleGrid />
      <SummaryGrid />
    </div>
  );
}