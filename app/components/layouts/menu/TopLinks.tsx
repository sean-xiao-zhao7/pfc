import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function TopLinks() {
    return (
        <>
            <div className="top-links-container">
                <ul>
                    <li>
                        <FaPhoneAlt />
                        1.844.618.5867
                    </li>
                    <li>
                        <IoMdMail />
                        <a href="mailto:info@prisonfellowship.ca">
                            info@prisonfellowship.ca
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="et-social-icon et-social-facebook">
                        <a
                            href="https://www.facebook.com/PrisonFellowshipCanada/"
                            className="icon"
                        >
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className="et-social-icon et-social-twitter">
                        <a
                            href="https://twitter.com/pfcpath2change"
                            className="icon"
                        >
                            <FaXTwitter />
                        </a>
                    </li>
                    <li className="et-social-icon et-social-instagram">
                        <a
                            href="https://www.instagram.com/prisonfellowship_canada/?hl=en"
                            className="icon"
                        >
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36002">
                        <a href="https://prisonfellowshipbridgecare.ca/">
                            EX-PRISONER RESOURCES
                        </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-37108">
                        <a href="/contact-us/">CONTACT US</a>
                    </li>
                </ul>
            </div>
            <div className="top-links-container mobile">
                <ul>
                    <li>
                        <FaPhoneAlt />
                        1.844.618.5867
                    </li>
                    <li>
                        <IoMdMail />
                        <a href="mailto:info@prisonfellowship.ca">
                            info@prisonfellowship.ca
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36002">
                        <a href="https://prisonfellowshipbridgecare.ca/">
                            EX-PRISONER RESOURCES
                        </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-37108">
                        <a href="/contact-us/">CONTACT US</a>
                    </li>
                    <li className="et-social-icon et-social-facebook">
                        <a
                            href="https://www.facebook.com/PrisonFellowshipCanada/"
                            className="icon"
                        >
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className="et-social-icon et-social-twitter">
                        <a
                            href="https://twitter.com/pfcpath2change"
                            className="icon"
                        >
                            <FaXTwitter />
                        </a>
                    </li>
                    <li className="et-social-icon et-social-instagram">
                        <a
                            href="https://www.instagram.com/prisonfellowship_canada/?hl=en"
                            className="icon"
                        >
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
