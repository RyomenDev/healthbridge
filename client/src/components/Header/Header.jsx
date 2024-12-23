import { useState, useRef, useEffect } from "react";
import Navbar from "./NavBar";
import HomeData from "../../Data/MainData";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isContactLanguageOpen, setIsContactLanguageOpen] = useState(false); // State to toggle contact and language visibility
  const { header } = HomeData;
  const { contactOptions, languages, logo } = header;

  // Reference for the navbar container to detect outside clicks
  const navbarRef = useRef(null);

  const handleLogoClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleHamburgerClick = () => {
    setIsContactLanguageOpen(!isContactLanguageOpen); // Toggle contact and language section visibility
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full z-50 flex flex-wrap justify-between items-center py-4 px-6 bg-blue-50 shadow-lg border-b-4 border-blue-200">
      {/* Logo Section */}
      <div
        className="flex items-center w-auto justify-start cursor-pointer"
        onClick={handleLogoClick}
      >
        <img src={logo} alt="HealthBridge" className="w-auto h-12 md:h-16" />
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div
        className="md:hidden flex items-center"
        onClick={handleHamburgerClick} // Show contact and language options on click
      >
        <button className="text-blue-500 focus:outline-none">
          <span className="block w-6 h-1 bg-blue-500 mb-2"></span>
          <span className="block w-6 h-1 bg-blue-500 mb-2"></span>
        </button>
      </div>

      {/* Navbar (Sliding from Left) */}
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 w-64 bg-gradient-to-r from-blue-200 to-slate-100 text-black h-full transform transition-transform duration-300 ease-in-out border-x-1 border-blue-100 z-50 ${
          isNavbarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Navbar logo={logo} setIsNavbarOpen={setIsNavbarOpen} />
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
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

      {/* Contact and Language Section (Visible on Mobile when Hamburger is clicked) */}
      <div
        className={`${
          isContactLanguageOpen ? "flex" : "hidden"
        } md:flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6`}
      >
        <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          {contactOptions.map((option, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start text-sm text-gray-600"
            >
              <div className="text-sm">{option.label}</div>
              <button type="button" className="btn btn-outline-primary">
                <a
                  href={`tel:${option.number}`}
                  className="hover:text-blue-600"
                >
                  {option.number}
                </a>
              </button>
            </li>
          ))}
        </ul>

        {/* Language Selector */}
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
