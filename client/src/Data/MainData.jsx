const MainData = {
  header: {
    logo: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/logo.svg",
    contactOptions: [
      { label: "Emergency", number: "1066" },
      { label: "Apollo Lifeline", number: "18605001066" },
    ],
    languages: [
      { code: "en", name: "English" },
      { code: "ar", name: "Arabic" },
      { code: "fr", name: "French" },
      { code: "de", name: "German" },
      { code: "zh-CN", name: "Chinese" },
    ],
  },
  images: [
    {
      src: "https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/emergency_banner_web-674e9396b809b.jpg",
      alt: "Emergency Banner",
      link: "tel:1066",
    },
    {
      src: "https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/proton_cancer_banner_web-674e93cac64aa.jpg",
      alt: "Proton Banner",
      link: "https://proton.apollohospitals.com/proton-therapy/?utm_campaign=proton_cancer&utm_source=home_banner&utm_medium=digital",
    },
  ],
  actionOptions: [
    {
      title: "Book Appointment",
      imgSrc: "https://via.placeholder.com/150",
      link: "/book-appointment",
    },
    {
      title: "Find Doctor",
      imgSrc: "https://via.placeholder.com/150",
      link: "/find-doctor",
    },
    {
      title: "Find Hospital",
      imgSrc: "https://via.placeholder.com/150",
      link: "/find-hospital",
    },
    {
      title: "Buy Medicine",
      imgSrc: "https://via.placeholder.com/150",
      link: "/buy-medicine",
    },
  ],
  motive: {
    title: "Why Choose HealthBridge?",
    description:
      "Established by Dr. Prathap C. Reddy in 1983, HealthBridge has a robust presence across the healthcare ecosystem. From routine wellness & preventive healthcare to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 200 million lives from over 150 countries.",
    points: [
      {
        title: "Largest private healthcare network of Hospitals",
        count: "73+",
        imgSrc:
          "https://cdn.apollohospitals.com/apollohospitals-live/wca/01-Counters-Hospitals-1.svg",
      },
      {
        title: "Largest private network of clinics across India",
        count: "700+",
        imgSrc:
          "https://cdn.apollohospitals.com/apollohospitals-live/wca/02-Counters-Clinics-2.svg",
      },
      {
        title: "Diagnostic centres across India",
        count: "2,300+",
        imgSrc:
          "https://cdn.apollohospitals.com/apollohospitals-live/wca/03-Diagnostic-centres-2.svg",
      },
      {
        title: "Pharmacies",
        count: "6,000+",
        imgSrc:
          "https://cdn.apollohospitals.com/apollohospitals-live/wca/04-Pharmacies-2.svg",
      },
      {
        title: "Doctors",
        count: "11,000+",
        imgSrc:
          "https://cdn.apollohospitals.com/apollohospitals-live/wca/06-Doctors-2.svg",
      },
      {
        title: "Beds",
        count: "10,000+",
        imgSrc:
          "https://cdn.apollohospitals.com/apollohospitals-live/wca/hospital-bed.svg",
      },
    ],
    imageSrc:
      "https://cdn.apollohospitals.com/apollohospitals/apollo-prohealth/ah/why-choose.jpg",
  },
  //   footer: {
  //     // Footer data can be added here if needed
  //   },
  footer: {
    socialLinks: [
      { href: "#", icon: "fab fa-facebook-f" },
      { href: "#", icon: "fab fa-twitter" },
      { href: "#", icon: "fab fa-instagram" },
      { href: "#", icon: "fab fa-linkedin" },
    ],
    footerSections: [
      {
        title: "Company Name",
        content: (
          <p className="text-sm">
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        ),
      },
      {
        title: "Products",
        links: ["Product 1", "Product 2", "Product 3", "Product 4"],
      },
      {
        title: "Useful Links",
        links: ["Pricing", "Settings", "Orders", "Help"],
      },
      {
        title: "Contact",
        content: (
          <ul>
            {[
              { icon: "fas fa-home", text: "123 Main St, City, Country" },
              { icon: "fas fa-envelope", text: "info@example.com" },
              { icon: "fas fa-phone", text: "+ 01 234 567 88" },
              { icon: "fas fa-print", text: "+ 01 234 567 89" },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <i className={item.icon}></i>
                <span className="text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        ),
      },
    ],
  },
};

export default MainData;
