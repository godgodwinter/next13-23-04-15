import FeaturesLayout from "../FeaturesLayout";
import Link from "next/link";

function PdfLayout({ children }) {
  return (
    <FeaturesLayout>
      {" "}
      <div className="prose-lg py-4 boder-b-2 border-slate-200">
        <h2>PDF Generator with React-pdf</h2>
        <p>This example fetching data with that Query</p>
        <div className="space-x-2">
          <a
            href="https://github.com/diegomura/react-pdf"
            className="btn btn-primary"
            target={`_blank`}
          >
            {" "}
            Documentation
          </a>
        </div>
      </div>
      <div className="space-x-2 py-2  border-b-2 border-slate-200">
        <Link href="/features/pdf">
          {" "}
          <button className="btn btn-sm btn-primary">Basic</button>
        </Link>
      </div>
      <div className="py-2">{children}</div>
    </FeaturesLayout>
  );
}

export default PdfLayout;
