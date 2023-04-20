import FeaturesLayout from "./FeaturesLayout";
export default function tailwind() {
  return (
    <FeaturesLayout>
      <div className="prose-lg py-4 boder-b-2 border-slate-200">
        <h2>Styling with Tailwind CSS</h2>
        <p>
          Im lazy to write css file, then im using tailwind to Styling my entire
          project. And some component using Daisy UI.
        </p>
        <div className="space-x-2">
          {" "}
          <a
            href="https://tailwindcss.com/docs/installation"
            className="btn btn-primary"
            target={`_blank`}
          >
            {" "}
            Documentation
          </a>
          <a
            href="https://daisyui.com/components/"
            className="btn btn-primary"
            target={`_blank`}
          >
            {" "}
            Daisy UI
          </a>
        </div>
      </div>
    </FeaturesLayout>
  );
}
