import { PDFViewer } from "@react-pdf/renderer";
import DocOne from "@/components/pdf/docOne/DocOne";

export default function DocOneView() {
  return (
    <PDFViewer>
      <DocOne />
    </PDFViewer>
  );
}
