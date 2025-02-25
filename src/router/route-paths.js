export const routePaths = {
  home: {
    root: "/",
  },
  auth: {
    login: "login",
    register: "register",
  },
  service: {
    root: "/services",
    details: `/services/:title`,
    add: `/add/:title`,
  },
  about: {
    root: "/about",
  },
  notFound: "*",
};
