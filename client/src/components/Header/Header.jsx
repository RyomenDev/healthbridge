import { useState, useRef, useEffect } from "react";
import Navbar from "./NavBar";
import HomeData from "../../Data/MainData";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { header } = HomeData;
  const { contactOptions, languages, logo } = header;

  // Reference for the navbar container to detect outside clicks
  const navbarRef = useRef(null);

  // Toggle Navbar visibility when logo is clicked
  const handleLogoClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Close the navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsNavbarOpen(false);
      }
    };

    // Add event listener for click
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the navbar manually via button
  const handleCloseNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-wrap justify-between items-center py-4 px-6 bg-white shadow-md border-b-4 border-gray-200">
      {/* Logo Section */}
      <div
        className="flex items-center w-auto justify-start cursor-pointer"
        onClick={handleLogoClick}
      >
        <img
          src={logo}
          alt="Apollo Hospitals Logo"
          className="w-auto h-12 md:h-16"
        />
      </div>

      {/* Navbar (Sliding from Left) */}
      <div
        ref={navbarRef} // Assign the ref to the navbar
        className={`fixed top-0 left-0 w-64 bg-slate-100 text-black h-full transform transition-transform duration-300 ease-in-out ${
          isNavbarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button inside Navbar */}
        <button
          onClick={handleCloseNavbar}
          className="absolute top-4 right-4 text-black text-5xl"
          aria-label="Close Navbar"
        >
          &times;
        </button>

        <Navbar logo={logo} />
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
        <form
          className="relative w-full max-w-lg"
          action="https://www.apollohospitals.com/"
        >
          <input
            id="search"
            type="text"
            className="w-full py-2 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="s"
            autoComplete="off"
            placeholder="Search Doctor or Hospital"
            aria-label="Search Doctor or Hospital"
          />
          <button
            id="search-submit"
            type="submit"
            className="absolute right-2 top-2 text-blue-500 hover:text-blue-700"
            title="Search"
            aria-label="Search"
          ></button>
        </form>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          {contactOptions.map((option, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start text-sm text-gray-600"
            >
              <div className="text-sm">{option.label}</div>
              <button type="button" className="btn btn-outline-primary">
                <a href={`tel:${option.number}`}>{option.number}</a>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 md:mt-0">
          <select
            className="bg-transparent border border-gray-300 rounded-lg text-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Select Language"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
