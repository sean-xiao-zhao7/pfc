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
            <SpaceDivider />
        </div>
    );
}
