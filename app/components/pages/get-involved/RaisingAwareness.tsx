import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaSquareXTwitter,
    FaYoutube,
} from "react-icons/fa6";

import PFCLogo from "~/components/blocks/PFCLogo";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function RaisingAwareness() {
    return (
        <div className="page-container" id="raising-awareness">
            <div className="slogan contain-text">
                <PFCLogo />
                <h1>Raising Awareness</h1>
                <p className="center">
                    “For we are God’s handiwork, created in Christ Jesus to do
                    good works, which God prepared in advance for us to do.”
                </p>
                <p className="center">Ephesians 2:10 (NIV)</p>
            </div>
            <div className="body">
                <div className="center">
                    <h2>ENGAGE YOUR CHURCH</h2>
                    <p className="center">
                        Help raise awareness about the work PFC does with your
                        church, workplace and social network.
                    </p>
                    <p>
                        PFC wants to help you get your church involved in this
                        ministry. We will arrange for a PFC team member to join
                        your church for a presentation on the importance of this
                        ministry and help equip your church. PFC can provide
                        free private group training sessions for churches with
                        eight or more participants.
                    </p>
                    <a
                        href="https://prisonfellowship.ca/contact-us/"
                        target="_blank"
                        rel="noopenr"
                    >
                        <PfcButton text="Contact Us" />
                    </a>
                    <div className="center">
                        <h2>
                            Engage with us on various social media platforms:
                        </h2>
                        <div className="social-media-horizontal-container five">
                            <a
                                href="https://www.facebook.com/PrisonFellowshipCanada/"
                                target="_blank"
                                rel="noopener"
                                className="facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://www.facebook.com/PrisonFellowshipCanada/"
                                target="_blank"
                                rel="noopener"
                                className="instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/prison-fellowship-canada/"
                                target="_blank"
                                rel="noopener"
                                className="linkedin"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://twitter.com/pfcpath2change"
                                target="_blank"
                                rel="noopener"
                                className="x"
                            >
                                <FaSquareXTwitter />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UC6GV-_BVbJpuOoodh6P3XvA"
                                target="_blank"
                                rel="noopener"
                                className="youtube"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                    <img
                        src="/images/pages/get-involved/church_outside.jpg"
                        alt="church outside"
                    />
                </div>
                <SpaceDivider />
            </div>
        </div>
    );
}
