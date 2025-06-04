// components
import Home from "~/components/home/Home";
import WhoWeAre from "~/components/pages/WhoWeAre";

export function meta() {
    return [{ title: "Prison Fellowship Canada" }, { name: "", content: "" }];
}

export default function Routes() {
    return <Home />;
}
