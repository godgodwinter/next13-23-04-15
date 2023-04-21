import Layout from "@/components/layout";
import Link from "next/link";

function FeaturesLayout({ children }) {
  return (
    <Layout>
      <div className="space-x-4 border-solid border-2 border-slate-200">
        <div className="prose text-center">
          <p>This Example Features Ready to use on this NextJS Project.</p>
        </div>
        <div className="flex justify-center ">
          <div className="my-12 grid gap-x-8 gap-y-5 grid-cols-2 md:grid-cols-3">
            <Link href="/features/toast" className="flex gap-1 items-center">
              <svg
                width="19"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
              </svg>
              <div>
                <span className="font-bold">Toast : react-hot-toast</span>
              </div>
            </Link>
            <Link href="/features/router" className="flex gap-1 items-center">
              <svg
                width="19"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
              </svg>
              <span className="font-bold">Router : NextJs</span>
            </Link>
            <Link href="/features/recoil" className="flex gap-1 items-center">
              <svg
                width="19"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
              </svg>
              <span className="font-bold">State Management : Recoil</span>
            </Link>
            <Link href="/features/tailwind" className="flex gap-1 items-center">
              <svg
                width="19"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
              </svg>
              <span className="font-bold">CSS : Tailwind CSS</span>
            </Link>
            <Link href="/features/moment" className="flex gap-1 items-center">
              <svg
                width="19"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
              </svg>
              <div>
                <span className="font-bold">Datetime : Momentjs</span>
              </div>
            </Link>
            <Link
              href="/features/datatables"
              className="flex gap-1 items-center"
            >
              <svg
                width="19"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
              </svg>
              <div>
                <span className="font-bold">
                  DataTable : react-data-table-component
                </span>
              </div>
            </Link>
            <Link href="/features/query" className="flex gap-1 items-center">
              <svg
                width="19"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
              </svg>
              <div>
                <span className="font-bold">Query : tanstack query</span>
              </div>
            </Link>
            <Link href="/features/pdf" className="flex gap-1 items-center">
              <svg
                width="19"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 3 3 5-5" stroke="#A2724E" strokeWidth="2"></path>
              </svg>
              <div>
                <span className="font-bold">
                  PDF Generator & PDF Viewer : react-pdf/renderer
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4">{children}</div>
    </Layout>
  );
}

export default FeaturesLayout;
