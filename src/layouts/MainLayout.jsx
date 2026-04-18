import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-hero-mesh" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
