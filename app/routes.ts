import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("./components/home/Home.tsx"),
    route("about-us/who-we-are", "./components/pages/about_pfc/WhoWeAre.tsx"),
    route(
        "about-us/regional-offices",
        "./components/pages/about_pfc/RegionalOffices.tsx"
    ),
    route(
        "facilitating-transformation",
        "./components/pages/about_pfc/FacilitatingTransformation.tsx"
    ),
    route("about-us/pfc-team", "./components/pages/about_pfc/PFCTeam.tsx"),
    route("about-us/our-board", "./components/pages/about_pfc/OurBoard.tsx"),
    route(
        "about-us/our-financials",
        "./components/pages/about_pfc/OurFinancials.tsx"
    ),
    route(
        "about-us/statement-of-faith",
        "./components/pages/about_pfc/StatementOfFaith.tsx"
    ),
    route("*", "./components/pages/about_pfc/NotFound.tsx"),
] satisfies RouteConfig;
