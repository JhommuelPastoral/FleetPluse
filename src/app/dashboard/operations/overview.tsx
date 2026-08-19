import Map from "@/components/dashboard/map";
import ActiveTrips from "@/components/dashboard/operations/activeTrips";
import Alerts from "@/components/dashboard/operations/alerts";
export default function Overview() {
  return (
    <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-2">
      <section className="h-100">
        <Map />
      </section>
      <section className="h-100">
        <ActiveTrips />
      </section>
      <section className="h-100">
        <Alerts />
      </section>
    </div>
  );
}