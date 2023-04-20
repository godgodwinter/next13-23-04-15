import FeaturesLayout from "./FeaturesLayout";
export default function router() {
  return (
    <FeaturesLayout>
      <div className="prose-lg py-4 boder-b-2 border-slate-200">
        <h2>Routing with Next Router</h2>
        <p>Im just implement from doc, with Pages and Link to access pages</p>
        <div className="space-x-2">
          <a
            href="https://nextjs.org/docs/basic-features/pages"
            className="btn btn-primary"
            target={`_blank`}
          >
            {" "}
            Pages
          </a>
          <a
            href="https://nextjs.org/docs/api-reference/next/link"
            className="btn btn-primary"
            target={`_blank`}
          >
            {" "}
            Link
          </a>
        </div>
      </div>
    </FeaturesLayout>
  );
}
