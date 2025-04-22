import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      {/* Header */}
      <header className="">
        <Navbar></Navbar>
        
      </header>

      <main className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </main>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
