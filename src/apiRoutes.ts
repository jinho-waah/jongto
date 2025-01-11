const pageRoutes = {
  main: "/",
  ticker: "/:ticker",
  login: "/login",
  auth: "/login/oauth2/code/:provider",
} as const ;

export default pageRoutes;
