import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <main data-theme="winter" className="min-h-screen">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </main>
    </>
  );
}
