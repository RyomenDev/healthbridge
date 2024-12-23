export const navItems = [
  { name: "Premier", slug: "/premier", active: true },
  { name: "Home", slug: "/", active: true },
  { name: "Records", slug: "/records", active: true },
  { name: "Transaction History", slug: "#", active: true },
  { name: "Medicines", slug: "#", active: true },
  { name: "Enquiry", slug: "#", active: true },
];

export const authItems = (authStatus, LogoutBtn) => [
  { name: "Support", slug: "#", active: true },
  { name: "View Profile", slug: "/userProfile", active: authStatus },
  { name: "Login", slug: "/login", active: !authStatus },
  {
    name: "Logout",
    slug: "/logout",
    active: authStatus,
    component: <LogoutBtn />,
  },
];
