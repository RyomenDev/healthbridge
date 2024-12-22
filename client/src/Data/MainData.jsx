const MainData = {
  header: {
    logo: "https://png.pngtree.com/png-clipart/20230913/original/pngtree-healthcare-medical-center-diagnostic-centre-hospital-and-treatment-service-logo-design-png-image_11080637.png",
    contactOptions: [
      //   { label: "Emergency", number: "XX00" },
      { label: "HealthBridge", number: "1800 XXX XXX" },
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
      src: "https://servisource.ie/wp-content/uploads/2021/05/3d-rendering-hospital-interior-with-lots-copy-space.jpg",
      alt: "Emergency Banner",
      link: "tel:XX00",
    },
    {
      src: "https://wallpaperaccess.com/full/1282835.jpg",
      alt: "Proton Banner",
      link: "#",
    },
    {
      src: "https://cdn-images-1.medium.com/max/1600/1*8O-jeTVBIduBPSKj_Yo5nQ.jpeg",
      alt: "Proton Banner",
      link: "#",
    },
    {
      src: "https://i.pinimg.com/736x/db/c8/9a/dbc89a5b27c6ac03dd10f96480044a4f.jpg",
      alt: "Proton Banner",
      link: "#",
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
      "Established by xxxxx in xxxxx, HealthBridge has a robust presence across the healthcare ecosystem. From routine wellness & preventive healthcare to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 200 million lives from over 150 countries.",
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
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
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
