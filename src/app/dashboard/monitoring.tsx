import Map from "@/components/dashboard/map";
import FleetStatus from "@/components/dashboard/fleetStatus";
import Alerts from "@/components/dashboard/recent";
export default function Monitoring() {
  return (
    <section className="grid w-full gap-2 h-full md:h-100 md:grid-cols-[2fr_1fr_1fr]">
      <div className="h-100">
        <Map />
      </div>

      <div className="h-100">
        <FleetStatus />
      </div>

      <div className="h-100">
        <Alerts />
      </div>
    </section>
  );
}