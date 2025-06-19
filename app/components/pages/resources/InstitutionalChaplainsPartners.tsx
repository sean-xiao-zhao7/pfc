import PFCLogo from "~/components/blocks/PFCLogo";

export default function InstitutionalChaplainsPartners() {
    return (
        <div className="page-container" id="institutional-chaplains-partners">
            <div className="slogan">
                <PFCLogo />
                <h1>Institutional Chaplains Partners</h1>
            </div>
            <div className="body">
                <p>
                    Prison Fellowship Canada is happy to provide institutions
                    with resources that allow incarcerated individuals know
                    about the PFC programs available for them. Below are some
                    resources available for your use at your institution. Visit
                    this page regularly for ongoing updates.
                </p>
                <h2>FAITH & JUSTICE PROGRAM</h2>
                <div className="three-cols">
                    <div className="box">
                        <h3>The Forgiveness Journey</h3>
                        <img
                            src="/images/pages/resources/institutional-chaplains-partners/TFJ_E.png"
                            alt="The Forgiveness Journey"
                        />
                        <p>
                            Click{" "}
                            <a
                                href="https://prisonfellowship.ca/wp-content/uploads/2022/07/PFC-Posters-FJ-TFJ-EN.pdf"
                                target="_blank"
                                rel="noopener"
                            >
                                here
                            </a>{" "}
                            to download The Forgiveness Journey institutional
                            poster.
                        </p>
                    </div>
                    <div className="box">
                        <h3>The Re-Entry Journey</h3>
                        <img
                            src="/images/pages/resources/institutional-chaplains-partners/TRJ_E.png"
                            alt="The Re-Entry Journey
"
                        />
                        <p>
                            Click{" "}
                            <a
                                href="https://prisonfellowship.ca/wp-content/uploads/2022/07/PFC-Posters-FJ-Life-Skills-EN.pdf"
                                target="_blank"
                                rel="noopener"
                            >
                                here
                            </a>{" "}
                            to download The Re-Entry Journey institutional
                            poster.
                        </p>
                    </div>
                    <div className="box">
                        <h3>The Sycamore Tree</h3>
                        <img
                            src="/images/pages/resources/institutional-chaplains-partners/TST_E.png"
                            alt="The Sycamore Tree"
                        />
                        <p>
                            Click{" "}
                            <a
                                href="https://prisonfellowship.ca/wp-content/uploads/2022/08/PFC-Posters-TST-FJ-Series-EN.pdf"
                                target="_blank"
                                rel="noopener"
                            >
                                here
                            </a>{" "}
                            to download The Sycamore Tree institutional poster.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
