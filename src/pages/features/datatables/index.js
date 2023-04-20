import DatatablesLayout from "./DatatablesLayout";
import DataTableOne from "@/components/datatables/DataTableOne";

export default function DataTableExample() {
  return (
    <DatatablesLayout>
      Data Table Index
      <div>
        <DataTableOne />
      </div>
    </DatatablesLayout>
  );
}
