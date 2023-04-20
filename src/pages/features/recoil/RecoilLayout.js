import FeaturesLayout from "../FeaturesLayout";
import Link from "next/link";

function RecoilLayout({ children }) {
  return (
    <FeaturesLayout>
      {" "}
      <div className="prose-lg py-4">
        <h2>State with Recoil</h2>
        <p>
          This case i make data store state on @/store/CounterStore.js
          <br></br> Then i call that counter on 3 component :
          @/components/recoil/ TestRecoilShared.js (button counter increment
          #pagesIndex), CounterData(just call counter data #Other) and
          SecondPagesRecoilComponents (call counter data #secondPages).
        </p>
        <a
          href="https://recoiljs.org/"
          className="btn btn-primary"
          target={`_blank`}
        >
          {" "}
          Documentation
        </a>
      </div>
      <div className="space-x-2 py-2  border-b-2 border-slate-200">
        <Link href="/features/recoil">
          {" "}
          <button className="btn btn-sm btn-primary">Index Pages</button>
        </Link>
        <Link href="/features/recoil/second">
          <button className="btn btn-sm btn-primary">Second Pages</button>
        </Link>
        <Link href="/features/recoil/other">
          <button className="btn btn-sm btn-primary">Other Pages</button>
        </Link>
      </div>
      <div className="py-2">{children}</div>
    </FeaturesLayout>
  );
}

export default RecoilLayout;
