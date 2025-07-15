import { Link } from "react-router";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function AboutUs() {
    return (
        <div className="page-container" id="about-us">
            <div className="slogan">
                <img
                    src="/images/home/cropped-favicon.png"
                    alt="PFC logo"
                    className="pfc-logo"
                />
                <h1>About Prison Fellowship Canada</h1>
            </div>
            <div className="body">
                <p>
                    For over four decades Prison Fellowship Canada (PFC) has
                    been working with the Canadian Christian community to help
                    transform the lives of anyone affected by crime. PFC’S
                    mandate is to offer hope, purpose and positive change –
                    through the forgiveness-based teachings of Jesus which call
                    on us all to dig deeper to love unconditionally.
                </p>
                <div className="center">
                    <Link to="/about-us/who-we-are/">
                        <PfcButton
                            text="More About PFC"
                            color="black"
                            type="button"
                        />
                    </Link>
                </div>
                <div className="four-cols align-top">
                    <div className="box">
                        <h2>Our Team</h2>
                        <img
                            src="/images/pages/about-us/Screenshot-2024-03-04-at-11.35.55-AM.png"
                            alt="Our team"
                        />
                        <Link to="/about-us/pfc-team/">
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </Link>
                    </div>
                    <div className="box">
                        <h2>Our Board</h2>
                        <img
                            src="/images/pages/about-us/PFCBoard2022.jpg"
                            alt="Our Board"
                        />
                        <Link to="/about-us/our-board/">
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </Link>
                    </div>
                    <div className="box">
                        <h2>Our Financials</h2>
                        <img
                            src="/images/pages/about-us/2022-Annual-Report-EN-2048x1583-2-2.jpeg"
                            alt="Our Financials"
                        />
                        <Link to="/about-us/our-financials/">
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </Link>
                    </div>
                    <div className="box">
                        <h2>Regional Offices</h2>
                        <img
                            src="/images/pages/about-us/PFCregions.jpg"
                            alt="Regional Offices"
                        />
                        <Link to="/about-us/regional-offices/">
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </Link>
                    </div>
                </div>
                <SpaceDivider />
            </div>
        </div>
    );
}
