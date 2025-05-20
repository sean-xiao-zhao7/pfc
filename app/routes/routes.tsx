import type { Route } from "./+types/home";

// componets
import Home from "~/components/home/Home";

export function meta({}: Route.MetaArgs) {
    return [{ title: "Prison Fellowship Canada" }, { name: "", content: "" }];
}

export default function Routes() {
    return <Home />;
}
