import FeaturesLayout from "../FeaturesLayout";
import Link from "next/link";

function DatatablesLayout({ children }) {
  return (
    <FeaturesLayout>
      {" "}
      <div className="prose-lg py-4 boder-b-2 border-slate-200">
        <h2>Datatable with react-data-table-component</h2>
        <p>This example using data table</p>
        <a
          href="https://react-data-table-component.netlify.app/?path=/docs/getting-started-examples--page"
          className="btn btn-primary"
          target={`_blank`}
        >
          {" "}
          Documentation
        </a>
      </div>
      <div className="space-x-2 py-2  border-b-2 border-slate-200">
        <Link href="/features/datatables">
          {" "}
          <button className="btn btn-sm btn-primary">Basic</button>
        </Link>
        {/* <Link href="/features/datatables/second">
          <button className="btn btn-sm btn-primary">Second Pages</button>
        </Link>
        <Link href="/features/datatables/other">
          <button className="btn btn-sm btn-primary">Other Pages</button>
        </Link> */}
      </div>
      <div className="py-2">{children}</div>
    </FeaturesLayout>
  );
}

export default DatatablesLayout;
