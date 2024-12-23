import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";

const NavBar = ({ logo, setIsNavbarOpen }) => {
  //   console.log("setIsNavbarOpen", setIsNavbarOpen);

  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const userName = userData?.name;

  const navItems = [
    { name: "Premier", slug: "/premier", active: true },
    { name: "Home", slug: "/", active: true },
    { name: "Records", slug: "#", active: true },
    { name: "Transaction History", slug: "#", active: true },
    { name: "Medicines", slug: "#", active: true },
    // { name: "Consultation", slug: "#", active: true },
    { name: "Enquiry", slug: "#", active: true },
    // { name: "Payment", slug: "#", active: true },
  ];

  const authItems = [
    { name: "Support", slug: "#", active: true },
    { name: "View Profile", slug: "/userProfile", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    {
      name: "Logout",
      slug: "/logout",
      active: authStatus,
      component: <LogoutBtn />,
    },
  ];

  return (
    <div className="flex flex-col items-start p-4 space-y-4 ">
      {/* Close Button */}
      <button
        onClick={() => setIsNavbarOpen(false)}
        className="absolute top-4 right-4 text-black text-5xl"
        aria-label="Close Navbar"
      >
        &times;
      </button>
      <img
        src={logo}
        alt="Apollo Hospitals Logo"
        className="w-auto h-12 md:h-16"
      />
      <div className="text-2xl font-semibold black">
        Hello, {userName || "Guest"}
      </div>
      {authStatus && <div className="text-sm text-gray">Welcome back!</div>}
      {/* Main Navigation Items */}
      {navItems.map(
        (item) =>
          item.active && (
            <div key={item.name}>
              <button
                onClick={() => {
                  setIsNavbarOpen(false); // Close menu on link click
                  navigate(item.slug);
                }}
                className="px-6 rounded-lg text-lg font-medium hover:bg-blue-500 hover:text-white transition duration-300"
              >
                {item.name}
              </button>
            </div>
          )
      )}

      {/* Auth & Support Items */}
      <div className="absolute bottom-0">
        {authItems.map(
          (item) =>
            item.active && (
              <div key={item.name}>
                {item.component ? (
                  <div className="px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-500 hover:text-white transition duration-300">
                    {item.component}
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsNavbarOpen(false); // Close menu on link click
                      navigate(item.slug);
                    }}
                    className="px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-500 hover:text-white transition duration-300"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default NavBar;
