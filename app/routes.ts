import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("./components/home/Home.tsx"),

    // About PFC
    route("about-us", "./components/pages/about_pfc/AboutUs.tsx"),
    route("about-us/who-we-are", "./components/pages/about_pfc/WhoWeAre.tsx"),
    route(
        "about-us/regional-offices",
        "./components/pages/about_pfc/RegionalOffices.tsx"
    ),
    route(
        "about-us/regional-offices/bc-northern-canada",
        "./components/pages/about_pfc/BCNorthernRegions.tsx"
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
    route("pfc-programs", "./components/pages/our_programs/OurPrograms.tsx"),
    route(
        "our-programs/prisoners/in-prison-programs",
        "./components/pages/our_programs/InPrisonPrograms.tsx"
    ),
    route(
        "our-programs/prisoners/in-prison-programs/faith-justice",
        "./components/pages/our_programs/FaithAndJustice.tsx"
    ),
    route(
        "our-programs/prisoners/in-prison-programs/pf-by-phone",
        "./components/pages/our_programs/PFCByPhone.tsx"
    ),
    route(
        "our-programs/restorative-justice",
        "./components/pages/our_programs/RestorativeJustice.tsx"
    ),
    route(
        "our-programs/restorative-justice/restorative-prison",
        "./components/pages/our_programs/RestorativePrison.tsx"
    ),
    route(
        "our-programs/restorative-justice/sycamore-tree",
        "./components/pages/our_programs/SycamoreTree.tsx"
    ),
    route(
        "our-programs/in-community-programs",
        "./components/pages/our_programs/InCommunityPrograms.tsx"
    ),
    route(
        "our-programs/in-community-programs/bridgecare",
        "./components/pages/our_programs/BridgeCare.tsx"
    ),
    route(
        "our-programs/in-community-programs/angel-tree",
        "./components/pages/our_programs/AngelTree.tsx"
    ),
    route(
        "our-programs/in-community-programs/angel-tree/angel-tree-camping",
        "./components/pages/our_programs/AngelTreeCamping.tsx"
    ),
    route(
        "our-programs/in-community-programs/angel-tree/angel-tree-christmas",
        "./components/pages/our_programs/AngelTreeChristmas.tsx"
    ),

    // resources
    route("resources", "./components/pages/resources/Resources.tsx"),
    route(
        "resources/books",
        "./components/pages/resources/RecommendedReading.tsx"
    ),
    route(
        "resources/churches-volunteers/volunteer-resources",
        "./components/pages/resources/VolunteerResources.tsx"
    ),
    route(
        "resources/institutional-chaplains-partners",
        "./components/pages/resources/InstitutionalChaplainsPartners.tsx"
    ),
    route(
        "resources/churches-volunteers/church-resources",
        "./components/pages/resources/ChurchResources.tsx"
    ),

    // get involved
    route("get-involved", "./components/pages/get-involved/GetInvolved.tsx"),
    route(
        "calendar/category/pfcevents",
        "./components/pages/get-involved/PFCEventsCalendar.tsx"
    ),
    route(
        "get-involved/volunteer",
        "./components/pages/get-involved/Volunteer.tsx"
    ),
    route(
        "resources/institutional-chaplains",
        "./components/pages/get-involved/InstitutionalChaplains.tsx"
    ),
    route(
        "get-involved/prayer-partners",
        "./components/pages/get-involved/PrayerPartners.tsx"
    ),
    route(
        "get-involved/raise-awareness",
        "./components/pages/get-involved/RaisingAwareness.tsx"
    ),

    // Donate
    route("donate-online", "./components/pages/donate/Donate.tsx"),
    route(
        "donate-online/pathway-partners",
        "./components/pages/donate/PathwayPartners.tsx"
    ),
    route(
        "donate-online/ways-to-donate",
        "./components/pages/donate/WaysToDonate.tsx"
    ),

    // contact us
    route("contact-us", "./components/pages/contact-us/ContactUs.tsx"),

    // 404
    route("*", "./components/pages/NotFound.tsx"),
] satisfies RouteConfig;
