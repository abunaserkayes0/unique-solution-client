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
    details: `/services/:id`,
    add: `/add/:id`,
  },
  about: {
    root: "/about",
  },
  notFound: "*",
};
