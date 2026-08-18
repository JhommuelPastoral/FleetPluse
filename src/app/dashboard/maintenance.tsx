import FuelConsumption from "@/components/dashboard/fuelConsumption";
import MaintenanceCost from "@/components/dashboard/maintenanceCost";
import UpcomingMaintenance from "@/components/dashboard/upcomingMaintenance";
export default function Maintenance() {
  return (
    <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-2 w-full">
      <FuelConsumption/>
      <MaintenanceCost/>
      <UpcomingMaintenance/>
    </div>
  );
}