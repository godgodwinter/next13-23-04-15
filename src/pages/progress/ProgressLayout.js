import Layout from "@/components/layout";

function ProgressLayout({ children }) {
  return (
    <Layout>
      <div className="border-solid border-2 border-slate-200">
        <div className="prose text-center">
          <p>this features isnt ready.</p>
        </div>
        <div className="flex justify-center space-x-4 ">
          <div className="my-12 grid gap-x-8 gap-y-5 grid-cols-2 md:grid-cols-3">
            <div className="flex gap-1 items-center">
              ❌ DataTable : react-data-table-component
            </div>
            <div className="flex gap-1 items-center">❌ Form : formik</div>
            <div className="flex gap-1 items-center">
              ❌ Query : Tanstack Query
            </div>
            <div className="flex gap-1 items-center">❌ Chart</div>
            <div className="flex gap-1 items-center">❌ Motion : framer</div>
            <div className="flex gap-1 items-center">❌ PDF Generator</div>
            <div className="flex gap-1 items-center">❌ PDF Viewer</div>

            <div className="flex gap-1 items-center">❌ Import Excel</div>
            <div className="flex gap-1 items-center">❌ Datetime Picker</div>
            <div className="flex gap-1 items-center">❌ Select with Search</div>
          </div>
        </div>
      </div>

      <div className="p-4">{children}</div>
    </Layout>
  );
}

export default ProgressLayout;
