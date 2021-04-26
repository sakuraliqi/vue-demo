const defaultRoutes = [
    {
        path: "/",
        redirect: "/businessManagement",
    },
    {
        path: "/businessManagement",
        name: "businessManagement",
        component: () => import("@/view/BusinessManagement/index.vue")
    },
  ];
export default defaultRoutes;