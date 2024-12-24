import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";
import { navItems, authItems } from "../../Data/navBarData";

const NavBar = ({ logo, setIsNavbarOpen }) => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const userName = userData?.name;

  return (
    <div className="flex flex-col items-start px-4 py-2">
      {/* Close Button */}
      <button
        onClick={() => setIsNavbarOpen(false)}
        className="absolute top-4 right-4 text-black text-5xl"
        aria-label="Close Navbar"
      >
        &times;
      </button>
      <img src={logo} alt="Hospitals Logo" className="w-auto h-12 md:h-16" />
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
                className="px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-500 hover:text-white transition duration-300"
              >
                {item.name}
              </button>
            </div>
          )
      )}

      {/* Auth & Support Items */}
      <div className="absolute bottom-0">
        {authItems(authStatus, LogoutBtn).map(
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
