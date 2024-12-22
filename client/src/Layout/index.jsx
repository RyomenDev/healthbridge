import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RetellAI from "../RetellAi/RetellAIConnect";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* RetellAI Floating Component */}
      <div className="fixed bottom-6 right-6 z-50">
        <RetellAI />
      </div>
    </div>
  );
};

export default Layout;
