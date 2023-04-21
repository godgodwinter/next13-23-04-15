import FeaturesLayout from "../FeaturesLayout";
import Link from "next/link";

function QueryLayout({ children }) {
  return (
    <FeaturesLayout>
      {" "}
      <div className="prose-lg py-4 boder-b-2 border-slate-200">
        <h2>React Query with Tanstack Query</h2>
        <p>This example fetching data with that Query</p>
        <div className="space-x-2">
          <a
            href="https://tanstack.com/query/latest/docs/react/installation"
            className="btn btn-primary"
            target={`_blank`}
          >
            {" "}
            Documentation
          </a>
          <a
            href="https://tanstack.com/query/latest/docs/react/examples/react/simple"
            className="btn btn-primary"
            target={`_blank`}
          >
            {" "}
            Default Example
          </a>
          <a
            href="https://api.github.com/users/godgodwinter"
            className="btn btn-primary"
            target={`_blank`}
          >
            {" "}
            API Github examples
          </a>
        </div>
      </div>
      <div className="space-x-2 py-2  border-b-2 border-slate-200">
        <Link href="/features/query">
          {" "}
          <button className="btn btn-sm btn-primary">Basic</button>
        </Link>
        <Link href="/features/query/second">
          {" "}
          <button className="btn btn-sm btn-primary">Default Example</button>
        </Link>
      </div>
      <div className="py-2">{children}</div>
    </FeaturesLayout>
  );
}

export default QueryLayout;
