import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("./components/home/Home.tsx"),

    // About PFC
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

    // Our Programs
    route(
        "our-programs/prisoners/in-prison-programs",
        "./components/pages/our_programs/InPrisonPrograms.tsx"
    ),
    route(
        "our-programs/prisoners/in-prison-programs/faith-justice",
        "./components/pages/our_programs/FaithAndJustice.tsx"
    ),
    route(
        "our-programs/prisoners/in-prison-programs/pf-by-phone/",
        "./components/pages/our_programs/PFCByPhone.tsx"
    ),

    // 404
    route("*", "./components/pages/about_pfc/NotFound.tsx"),
] satisfies RouteConfig;
