import { Link } from "react-router";
import FullWidthContainer from "~/components/blocks/FullWidthContainer";
import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function BridgeCare() {
    return (
        <div className="page-container" id="bridgeCare">
            <div className="center simple-slogan">
                <img
                    src="/images/shared/100102p_Bridgecare.png"
                    alt="BridgeCare"
                />
                <p>
                    Perhaps the deepest part of prison ministry lives in the
                    client’s homecoming stories. When a person is released, they
                    find that they encounter many complexities, both emotionally
                    and practically. They are faced with their past, a criminal
                    record, a lack of confidence and for some, past connections
                    with their life of crime.
                </p>
            </div>
            <div className="body">
                <div className="two-cols">
                    <p>
                        The free society they are released into looks very
                        different than the life they got accustomed to. PFC’s
                        Bridgecare program steps in to interrupt a negative
                        cycle, and to help support those on this journey through
                        partnerships with the church, PFC volunteers walk
                        alongside them and help them find their way to a warm
                        church community where they can learn, grow and thrive
                        in the community.
                    </p>
                    <iframe
                        src="https://www.youtube.com/embed/0u8saPWng10"
                        title="PFC Bridgecare (2023)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <SpaceDivider />
                <SpaceDivider />
                <div className="two-cols bigger-text">
                    <img
                        src="/images/pages/bridgecare/WEB-IMAGES-2_Page_44-scaled-e1649075340239-980x551.jpg"
                        alt="talking"
                    />
                    <div>
                        <h2>EQUIPPING THE CHURCH</h2>
                        <p>
                            The free society they are released into looks very
                            different than the life they got accustomed to.
                            PFC’s Bridgecare program steps in to interrupt a
                            negative cycle, and to help support those on this
                            journey through partnerships with the church, PFC
                            volunteers walk alongside them and help them find
                            their way to a warm church community where they can
                            learn, grow and thrive in the community.
                        </p>
                    </div>
                </div>
            </div>
            <PfcBlock color="blue">
                <div className="center">
                    <p>
                        “But a Samaritan, as he travelled, came where the man
                        was; and when he saw him, he took pity on him. He went
                        to him and bandaged his wounds, pouring on oil and wine.
                        Then he put the man on his own donkey, brought him to an
                        inn and took care of him.”
                    </p>
                    <p>Luke 10: 33-34 (NIV)</p>
                </div>
            </PfcBlock>
            <div className="body">
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/pages/bridgecare/Annual-Report-2021-Images-File-1_Page_07-980x654.jpg"
                            alt="prison phone call"
                        />
                        <div className="center">
                            <h2>BridgeCare Phone Line</h2>
                            <p>
                                Bridgecare phone line is a toll-free phone line
                                available to chaplains in the provincial systems
                                across Canada. This phone line allows prisoners
                                an opportunity to connect with PFC up to six
                                months prior to leaving prison. Individuals get
                                contacts for relational and material supports
                                upon leaving the institution. This line is open
                                to people of any faith or of no faith. Prisoners
                                who express an interest in the Christian faith
                                are referred to the Bridgecare program details.
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/bridgecare/100102p_1Life.jpg"
                            alt="1Life"
                        />
                        <div className="center">
                            <h2>1Life Simulation</h2>
                            <p>
                                PFC invites participants from all walks of life
                                to take part in an experiential game in order to
                                to bring meaningful solutions to break the cycle
                                of crime that too many people and communities
                                are caught in.
                            </p>
                            <PfcButton
                                color="black"
                                text="Learn more"
                                type="button"
                            />
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/bridgecare/bridgecare-screencapture-1.jpg"
                            alt="Bridgecare screenshot"
                        />
                        <div className="center">
                            <h2>BridgeCare DIRECTORY</h2>
                            <p>
                                With the click of a button, individuals can find
                                their way to over 1800 organizations across
                                Canada offering practical support as they
                                integrate back into the community.
                            </p>
                            <PfcButton
                                color="black"
                                text="BridgeCare DIRECTORY"
                                type="button"
                            />
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/shared/church-res-cross.jpg"
                            alt="cross"
                        />
                        <div className="center">
                            <h2>Recommended Reading</h2>
                            <p>
                                Access an extensive database with books,
                                journals, articles and spiritual encouragement.
                            </p>
                            <PfcButton
                                color="black"
                                text="Learn more"
                                type="button"
                            />
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/shared/people-talking-in-a-circle.jpg"
                            alt="people talking in a circle"
                        />
                    </div>
                    <div className="box">
                        <div className="center">
                            <h2>The Sycamore Tree</h2>
                            <p>
                                Our restorative justice program offers those who
                                have caused harm to others through crime and
                                those who have been harmed to gain a joint
                                understanding of the impact of crime and proceed
                                along the pathway to healing and transformation
                            </p>
                            <PfcButton
                                color="black"
                                text="Learn more"
                                type="button"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <SpaceDivider />
        </div>
    );
}
