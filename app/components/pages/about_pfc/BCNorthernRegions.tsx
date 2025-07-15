import ExternalNewWindowLink from "~/components/blocks/ExternalNewWindowLink";
import PFCLogo from "~/components/blocks/PFCLogo";
import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function BCNorthernRegions() {
    return (
        <div className="page-container" id="bc-northern-canada">
            <div className="slogan">
                <PFCLogo />
                <h1>British Columbia & Northern Canada</h1>
            </div>
            <div className="body">
                <SpaceDivider />
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/pages/regional-offices/bc.jpg"
                            alt="BC"
                        />
                    </div>
                    <div className="box">
                        <p>
                            PFC is active in 24 federal and provincial
                            correctional facilities throughout the province of
                            BC and the North as of 2024.
                        </p>
                        <p>
                            PFC now has{" "}
                            <span className="bold">19 volunteers</span> in BC at
                            various stages of onboarding and/or active with PFC.
                        </p>
                        <p>
                            Volunteers on the national PFC by Phone line include
                            four very faithful team members from British
                            Columbia.
                        </p>
                    </div>
                </div>
                <PfcBlock color="green">
                    <div className="">
                        <h2>Testimony</h2>
                        <p>
                            " 'W' called again.
                            <br /> He’s such a wonderful person and his love for
                            the Lord and maturity in spirit is evident. <br />I
                            learn from the way he speaks. We enjoyed a good
                            conversation about the Lord and discussed Matthew
                            6:22 and 23. We prayed together to end the call. "
                        </p>
                    </div>
                </PfcBlock>
                <h2>Angel Tree Camping</h2>
                <p>
                    Angel Tree Camping in BC is supported by{" "}
                    <span className="bold">7 dedicated camp partners</span>{" "}
                    across British Columbia.
                </p>
                <p>
                    PFC seeks to match Angel Tree kids whose parents have longer
                    sentences with the same camp from year to year. Friendships
                    grow stronger. One child’s grandfather mentioned that his
                    grandson talks about camp all the time and in January was
                    already excited to return.
                </p>
                <p>
                    Angel Tree Christmas served 168 kids who received gifts from
                    incarcerated parents in 14 BC institutions.
                </p>
                <SpaceDivider />
                <h2>Regional Coordinator</h2>
                <div className="three-cols">
                    <div className="box">
                        <img
                            src="/images/pages/pfc-team/brenda.jpg"
                            alt="Brenda Hilling"
                        />
                    </div>
                    <div className="box">
                        <h2>Brenda Hilling</h2>
                        <p>Regional Coordinator – Pacific/Prairies</p>
                        <p>
                            <ExternalNewWindowLink
                                href="mailto:brenda@prisonfellowship.ca"
                                text="brenda@prisonfellowship.ca"
                            />
                        </p>
                    </div>
                    <div className="box">
                        <p>
                            <span className="bold">Phone:</span> 403-388-0047
                        </p>
                        <p>
                            <span className="bold">Toll Free:</span>
                            1-844-618-5867 ext. 310
                        </p>
                    </div>
                </div>
                <SpaceDivider />
                <h2>Other Regions</h2>
                <div className="three-cols">
                    <div>
                        <h3>Yukon</h3>
                        <p>
                            PFC is currently active in the Yukon through the
                            Angel Tree Christmas program.
                        </p>
                    </div>
                    <div>
                        <h3>Northwest Territories</h3>
                        <p>
                            PFC is currently active in the Yukon through the
                            Angel Tree Christmas program.
                        </p>
                    </div>
                    <div>
                        <h3>Nuvanut</h3>
                        <p>
                            PFC is currently active in the Yukon through the
                            Angel Tree Christmas program.
                        </p>
                    </div>
                </div>
            </div>
            <SpaceDivider />
        </div>
    );
}
