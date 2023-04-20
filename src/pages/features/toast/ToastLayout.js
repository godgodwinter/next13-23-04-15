import FeaturesLayout from "../FeaturesLayout";

function ToastLayout({ children }) {
  return (
    <FeaturesLayout>
      {" "}
      <div className="prose-lg py-4 border-b-2 border-slate-200">
        <h2>Toast with React Hot Toast</h2>
        <p>This case i made Toast with react-hot-toast.</p>
        <a
          href="https://react-hot-toast.com/"
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

export default ToastLayout;
