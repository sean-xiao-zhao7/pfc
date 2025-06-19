import PFCLogo from "~/components/blocks/PFCLogo";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function Resources() {
    return (
        <div className="page-container" id="recommended-reading">
            <div className="slogan">
                <PFCLogo />
                <h1>Resources</h1>
            </div>
            <SpaceDivider />
            <div className="body">
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/pages/resources/newspaper_on_table.jpg"
                            alt="newspaper"
                        />
                        <div className="center">
                            <h2>RECOMMENDED READING</h2>
                            <p>
                                Access resources to help you and your church
                                with prison ministry and the Canadian justice
                                system.
                            </p>
                            <PfcButton />
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/resources/classroom.jpg"
                            alt="classroom"
                        />
                        <div className="center">
                            <h2>CHURCH & VOLUNTEER PARTNERS</h2>
                            <p>
                                PFC volunteers and partner churches resources.
                            </p>
                            <PfcButton />
                        </div>
                    </div>
                </div>
                <div className="center">
                    <img
                        src="/images/pages/resources/prison_outside.jpg"
                        alt="outside prison"
                        className="smaller"
                    />
                    <div className="center">
                        <h2>INSTITUTIONAL CHAPLAIN PARTNERS </h2>
                        <p>
                            Resources for chaplains and Volunteer Coordinators.
                        </p>
                        <PfcButton />
                    </div>
                </div>
                <SpaceDivider />
                <div className="green-divided">
                    <div className="left">
                        <img
                            src="/images/pages/resources/bridgecare-screencapture.jpg"
                            alt="bridgecare screenshot"
                        />
                    </div>
                    <div className="right">
                        <h2>EX-PRISONER RESOURCES</h2>
                        <p>
                            Access an extensive database with resources,
                            articles and spiritual encouragement for released
                            individuals.
                        </p>
                        <PfcButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
