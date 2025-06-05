import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("./components/home/Home.tsx"),
    route("about-us/who-we-are", "./components/pages/WhoWeAre.tsx"),
    route(
        "about-us/regional-offices",
        "./components/pages/RegionalOffices.tsx"
    ),
    route(
        "facilitating-transformation",
        "./components/pages/FacilitatingTransformation.tsx"
    ),
    route("about-us/pfc-team", "./components/pages/PFCTeam.tsx"),
    route("about-us/our-board", "./components/pages/OurBoard.tsx"),
    route("about-us/our-financials", "./components/pages/OurFinancials.tsx"),
    route("*", "./components/pages/NotFound.tsx"),
] satisfies RouteConfig;
