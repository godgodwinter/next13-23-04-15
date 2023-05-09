import FeaturesLayout from "../FeaturesLayout";

function FormLayout({ children }) {
  return (
    <FeaturesLayout>
      {" "}
      <div className="prose-lg py-4 border-b-2 border-slate-200">
        <h2>Form react-hook-form</h2>
        {/* <p>This case i made Toast with react-hot-toast.</p> */}
        <a
          href="https://react-hook-form.com/get-started/"
          className="btn btn-primary"
          target={`_blank`}
        >
          {" "}
          Documentation
        </a>
      </div>
      <div className="py-4">{children}</div>
    </FeaturesLayout>
  );
}

export default FormLayout;
