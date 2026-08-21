import Header from "./header";
import SummaryCard from "./summaryCard";
import Overview from "./overview";
export default function Fleet() {
  return (
    <main className="flex flex-col gap-4 ">
      <Header />
      <SummaryCard/>
      <Overview />
    </main>
  );
}