import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("./components/home/Home.tsx"),
    route("about-us/who-we-are", "./components/pages/WhoWeAre.tsx"),
] satisfies RouteConfig;
