import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return <div className="px-5">
    <main className="min-h-screen container px-10 py-5">
        <Header />
        <Outlet/>
    </main>
    <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💖 by DGVJ-Coder
    </div>
  </div>
}

export default AppLayout;