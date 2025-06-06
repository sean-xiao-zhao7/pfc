import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import MainTopMenu from "./menu/MainTopMenu";
import Footer from "./Footer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <MainTopMenu />
                {children}
                <Footer />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
