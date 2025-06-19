import PFCLogo from "~/components/blocks/PFCLogo";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function GetInvolved() {
    return (
        <div className="page-container">
            <div className="slogan">
                <PFCLogo />
                <h1>Get Involved</h1>
            </div>
            <div className="body">
                <p>
                    Prison Fellowship Canada (PFC) executes its vision through
                    people, including our growing network of PFC Volunteers
                    across Canada. Our volunteers serve by working with children
                    and families, offenders, ex-offenders, victims, or through
                    fundraising, donations, prayer and office support. There are
                    many entry points and ways to be involved – and we are
                    respectful of your comfort level.
                </p>
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/pages/get-involved/hands_crossed.jpg"
                            alt="hands crossed"
                        />
                        <div>
                            <h2>VOLUNTEER</h2>
                            <p>
                                PFC provides step-by-step instructions on
                                getting started, a comprehensive training
                                program, and resources to minister to prisoners.
                                We would love to have you on our PFC Volunteer
                                team.
                            </p>
                            <PfcButton />
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/get-involved/prison_outside.jpg"
                            alt="prison"
                        />
                        <div>
                            <h2>INSTITUTIONAL CHAPLAINS</h2>
                            <p>
                                PFC wants to partner with you and your
                                institution to bring transformation and hope to
                                incarcerated individuals.
                            </p>
                            <PfcButton />
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/get-involved/huddle.jpg"
                            alt="huddle"
                        />
                        <div>
                            <h2>PRAYER PARTNERS</h2>
                            <p>
                                Join the men and women who pray with us daily
                                for this ministry.
                            </p>
                            <PfcButton />
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/get-involved/typing.jpg"
                            alt="typing"
                        />
                        <div>
                            <h2>RAISE AWARENESS</h2>
                            <p>
                                Join our online community today and share
                                content with your network.
                            </p>
                            <PfcButton />
                        </div>
                    </div>
                </div>
                <SpaceDivider />
            </div>
        </div>
    );
}
