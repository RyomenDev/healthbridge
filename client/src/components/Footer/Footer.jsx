import HomeData from "../../Data/MainData";
const Footer = () => {
  const { footer } = HomeData;
  const { socialLinks, footerSections } = footer;

  return (
    <footer className="bg-slate-600 text-gray-300 mt-4">
      {/* Social Networks Section */}
      <section className="flex flex-wrap justify-between items-center px-6 py-4 border-b border-gray-700">
        <div className="hidden lg:block">
          <span>Connect with us on social networks:</span>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-white">
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h6 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h6>
              {section.content ? (
                section.content
              ) : (
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#!" className="text-sm hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Bottom Section */}
      <div className="bg-slate-700 text-gray-500 text-center py-4">
        <p>
          © 2024 Copyright:{" "}
          <a href="#" className="text-white font-semibold hover:underline">
            HealthBridge.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
