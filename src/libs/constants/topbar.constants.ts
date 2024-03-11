import { INavs } from "../interfaces/topbar";

export const navs: INavs[] = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Services", route: "/services" },
  { name: "Blog", route: "/blog" },
  { name: "Features", route: "/features" },
  { name: "Pricing", route: "/Pricing" },
  { name: "Contact", route: "/Contact" },
];

export const accountNavs: INavs[] = [
  { name: "Profile", route: "/account" },
  { name: "Password", route: "/account/password" },
  { name: "Blogs", route: "/account/blogs" },
  { name: "Delete Account", route: "/account/delete-account" },
];
