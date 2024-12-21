import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen lg:flex-row">
        {/* Sidebar or Header (Responsive) */}
        <div className="w-full lg:w-1/6 bg-gray-100 lg:border-r-4">
          <Header />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 overflow-auto p-4">
          <Outlet />
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;

// import { Outlet, useLocation } from "react-router-dom";
// import Header from "../components/Header/Header";
// // import Footer from "../components/Footer/Footer";

// const Layout = () => {
//   const location = useLocation(); // Get the current location (path)

//   // Conditionally render the Header based on the current route
//   const showHeader = location.pathname !== "/login";

//   return (
//     <>
//       <div className="flex flex-col lg:flex-row h-screen">
//         {showHeader && (
//           <div className="w-full lg:w-1/6 bg-gray-100 border-b-4 lg:border-b-0 lg:border-r-4">
//             <Header />
//           </div>
//         )}
//         {/* Main Content */}
//         <div className="flex-1 bg-gray-100 overflow-auto">
//           <Outlet />
//         </div>
//       </div>
//       {/* {showHeader && <Footer />} */}
//     </>
//   );
// };

// export default Layout;
