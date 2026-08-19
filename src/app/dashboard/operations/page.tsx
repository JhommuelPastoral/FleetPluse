import Header from "./header";
import SummaryCard from "./summaryCard";
import OverView from "./overview";
import TableOperations from "./table";
export default function Operations() {
  return (
    <main className="flex flex-col gap-4 ">
      <Header />
      <SummaryCard />
      <OverView />
      <TableOperations />
    </main>
  );
}