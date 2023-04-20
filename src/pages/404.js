import Layout from "@/components/layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout>
      <div className="w-full flex justify-center min-h-screen py-4 ">
        <div className="text-center gap-4 space-y-4">
          {" "}
          <h1>404 - Page Not Found</h1>
          <Link href="/">
            {" "}
            <button className="btn btn-warning">back to Home</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
