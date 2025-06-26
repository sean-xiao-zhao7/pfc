import PFCLogo from "~/components/blocks/PFCLogo";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import MainButton from "~/components/buttons/MainButton";
import PFCInput from "~/components/form/PFCInput";
import PFCTextarea from "~/components/form/PFCtextarea";

export default function ContactUs() {
    return (
        <div className="page-container">
            <div className="slogan">
                <PFCLogo />
                <h1>Contact Us</h1>
            </div>
            <div className="body">
                <p>
                    Thank you for your interest in Prison Fellowship Canada. We
                    welcome the opportunity to speak with you about our
                    ministry.
                </p>
                <div className="two-cols">
                    <div className="box">
                        <h2>Get In Touch</h2>
                        <p>Prison Fellowship Canada General Inquiries</p>
                        <p>
                            5945 Airport Road, Suite 144
                            <br />
                            Mississauga, ON L4V 1R9
                            <br />
                            Phone: 905.673.5867
                        </p>
                        <p>
                            Toll-free: 1.844.618.5867
                            <br />
                            Fax: 905.673.6955
                            <br />
                            General inquiries:
                            <br />
                            <a
                                href="mailto:info@prisonfellowship.ca"
                                target="_blank"
                                rel="noopener"
                            >
                                info@prisonfellowship.ca
                            </a>
                        </p>
                    </div>
                    <div className="box">
                        <div className="two-cols input-container">
                            <PFCInput placeholder="First name" />
                            <PFCInput placeholder="Last name" />
                            <PFCInput placeholder="Email address" />
                            <PFCInput placeholder="I am interested in" />
                            <div className="two-cols-span">
                                <PFCTextarea placeholder="Message" />
                            </div>
                            <MainButton text="Send message" color="black" />
                        </div>
                    </div>
                </div>
                <SpaceDivider />
                <div className="map-container">
                    <iframe
                        width="600"
                        height="450"
                        loading="lazy"
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
                    ></iframe>
                </div>
                <SpaceDivider />
            </div>
        </div>
    );
}
