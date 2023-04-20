import FeaturesLayout from "./FeaturesLayout";
// import moment from "moment/moment";\
import DateNow from "@/components/moment/DateNow";
export default function momentPages() {
  //   const tgl = moment().format("MMMM Do YYYY, h:mm:ss a");

  return (
    <FeaturesLayout>
      <div className="prose-lg py-4 boder-b-2 border-slate-200">
        <h2>Momentjs</h2>
        <p>Simple syntax ready to use.</p>
        <div className="space-x-2">
          {" "}
          <a
            href="https://momentjs.com/"
            className="btn btn-primary"
            target={`_blank`}
          >
            {" "}
            Documentation
          </a>
        </div>
      </div>
      <div className="p-4 flex space-x-2">
        <div className="mockup-window border bg-base-300">
          <div className="flex justify-center px-4 py-16 bg-base-200">
            <DateNow />
          </div>
        </div>
        <div>
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>yarn add moment </code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>moment().format(&quot;MMMM Do YYYY, h:mm:ss a&quot;)</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
      </div>
    </FeaturesLayout>
  );
}
