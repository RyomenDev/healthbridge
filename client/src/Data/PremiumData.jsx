const PremiumData = {
  IMAGES: {
    background:
      "https://static.vecteezy.com/system/resources/previews/006/966/107/non_2x/medicine-doctor-and-stethoscope-touching-icon-heart-and-diagnostics-analysis-medical-on-modern-virtual-screen-interface-network-connection-medical-technology-diagnostics-of-heart-concept-photo.jpg",
    aiCaller:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkDhxOq-bOuLC3rohHILbhmi8psryog5rNQ&s",
    dataManagement:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-KMeO9kM50FiR74sRYBbTETnlucEnRMwVA&s",
    searchTools:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahQ6_ovhWGOrVsFIeCAa6uvBCuY8j6n6kIw&s",
    treatmentPlan:
      "https://medicaltransformationcenter.com/media/65830b5ff44dcc590ccd45d5/original.webp",
    medicalTools:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFDYrtRu9MP36n7uy6rsP5MWpl7v-GQqdyg&s",
    customerSupport:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2KPxkCE6YstPWEFpJ2-k9yfeVJxaVWMw1Q&s",
  },
  FEATURES: [
    {
      title: "AI Caller Access",
      description:
        "Use AI-assisted calling for patient and doctor interactions.",
      img: "aiCaller",
    },
    {
      title: "Unlimited Data Management",
      description: "Store and manage unlimited patient data securely.",
      img: "dataManagement",
    },
    {
      title: "Advanced Search Tools",
      description:
        "Quickly search medicines, prescriptions, and patient history.",
      img: "searchTools",
    },
    {
      title: "Custom Treatment Plans",
      description:
        "Create and manage treatment plans and reminders for your patients.",
      img: "treatmentPlan",
    },
    {
      title: "Integration with Medical Tools",
      description: "Seamlessly integrate with top medical tools and platforms.",
      img: "medicalTools",
    },
    {
      title: "Priority Support",
      description:
        "Access 24/7 priority support for all your queries and needs.",
      img: "customerSupport",
    },
  ],
};

// Resolving image references dynamically when used
PremiumData.FEATURES = PremiumData.FEATURES.map((feature) => ({
  ...feature,
  img: PremiumData.IMAGES[feature.img],
}));

export default PremiumData;
