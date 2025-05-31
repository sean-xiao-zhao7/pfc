import MainButton from "~/components/buttons/MainButton";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";

export default function MainMenuContents() {
    const [shrunk, setShrunk] = useState("");
    console.log(shrunk);
    useEffect(() => {
        const handler = () => {
            if (window.pageYOffset > 200) {
                setShrunk("shrunk");
            } else {
                setShrunk("");
            }
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <div id="main-menu-contents-container">
            <div id="main-menu-logo">
                <img
                    src="/images/icons/main_square.png"
                    alt="PFC logo"
                    className={"" + shrunk}
                />
            </div>
            <div id="main-menu-right-contents" className={"" + shrunk}>
                <ul className="nav">
                    <li className="hover-trigger-menu-item">
                        <a href="https://prisonfellowship.ca/about-us/">
                            About PFC <MdKeyboardArrowDown />
                        </a>
                        <ul className="sub-menu">
                            <li id="menu-item-68">
                                <a href="https://prisonfellowship.ca/about-us/who-we-are/">
                                    Who We Are
                                </a>
                            </li>
                            <li id="menu-item-35931">
                                <a href="https://prisonfellowship.ca/facilitating-transformation/">
                                    Facilitating Transformation
                                </a>
                            </li>
                            <li id="menu-item-102">
                                <a href="https://prisonfellowship.ca/about-us/pfc-team/">
                                    PFC Team
                                </a>
                            </li>
                            <li id="menu-item-105">
                                <a href="https://prisonfellowship.ca/about-us/our-board/">
                                    Our Board
                                </a>
                            </li>
                            <li id="menu-item-850">
                                <a href="https://prisonfellowship.ca/about-us/regional-offices/">
                                    Regional Offices
                                </a>
                            </li>
                            <li id="menu-item-98">
                                <a href="https://prisonfellowship.ca/about-us/our-financials/">
                                    Our Financials
                                </a>
                            </li>
                            <li id="menu-item-851">
                                <a href="https://prisonfellowship.ca/about-us/statement-of-faith/">
                                    Statement of Faith
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="hover-trigger-menu-item">
                        <a
                            href="https://prisonfellowship.ca/pfc-programs/"
                            className="hover-trigger-menu-item"
                        >
                            Our Programs <MdKeyboardArrowDown />
                        </a>
                        <ul className="sub-menu one-row">
                            <li id="menu-item-830">
                                <a href="https://prisonfellowship.ca/our-programs/prisoners/in-prison-programs/">
                                    In Prison Programs
                                </a>
                                <ul>
                                    <li id="menu-item-75">
                                        <a href="https://prisonfellowship.ca/our-programs/prisoners/in-prison-programs/faith-justice/">
                                            Faith &amp; Justice
                                        </a>
                                    </li>
                                    <li id="menu-item-76">
                                        <a href="https://prisonfellowship.ca/our-programs/prisoners/in-prison-programs/pf-by-phone/">
                                            PFC By Phone
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-77">
                                <a href="https://prisonfellowship.ca/our-programs/restorative-justice/">
                                    Restorative Justice
                                </a>
                                <ul>
                                    <li id="menu-item-1143">
                                        <a href="https://prisonfellowship.ca/our-programs/restorative-justice/sycamore-tree/">
                                            The Sycamore Tree
                                        </a>
                                    </li>
                                    <li id="menu-item-766">
                                        <a href="https://prisonfellowship.ca/our-programs/restorative-justice/restorative-prison/">
                                            Restorative Prison
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-80">
                                <a href="https://prisonfellowship.ca/our-programs/in-community-programs/">
                                    In Community Programs
                                </a>
                                <ul>
                                    <li id="menu-item-79">
                                        <a href="https://prisonfellowship.ca/our-programs/in-community-programs/bridgecare/">
                                            Bridgecare
                                        </a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-1257">
                                                <a href="https://prisonfellowship.ca/our-programs/in-community-programs/bridgecare/1life/">
                                                    1Life
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-771">
                                        <a href="https://prisonfellowship.ca/our-programs/in-community-programs/angel-tree/">
                                            Angel Tree
                                        </a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-89">
                                                <a href="https://prisonfellowship.ca/our-programs/in-community-programs/angel-tree/angel-tree-camping/">
                                                    Angel Tree Camping
                                                </a>
                                            </li>
                                            <li id="menu-item-90">
                                                <a href="https://prisonfellowship.ca/our-programs/in-community-programs/angel-tree/angel-tree-christmas/">
                                                    Angel Tree Christmas
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="hover-trigger-menu-item">
                        <a
                            href="https://prisonfellowship.ca/resources/"
                            className="hover-trigger-menu-item"
                        >
                            Resources <MdKeyboardArrowDown />
                        </a>
                        <ul className="sub-menu">
                            <li id="menu-item-64">
                                <a href="https://prisonfellowship.ca/resources/books/">
                                    Recommend Readings
                                </a>
                            </li>
                            <li id="menu-item-1714">
                                <a href="https://prisonfellowship.ca/resources/institutional-chaplains-partners/">
                                    Institutional Chaplain Partners
                                </a>
                            </li>
                            <li id="menu-item-100">
                                <a href="https://prisonfellowship.ca/resources/churches-volunteers/church-resources/">
                                    Church Resources
                                </a>
                            </li>
                            <li id="menu-item-101">
                                <a href="https://prisonfellowship.ca/resources/churches-volunteers/volunteer-resources/">
                                    Volunteer Resources
                                </a>
                            </li>
                            <li id="menu-item-772">
                                <a
                                    target="_blank"
                                    href="https://prisonfellowshipbridgecare.ca/"
                                >
                                    Ex-Prisoner Resources
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="button-menu">
                    <li className="hover-trigger-menu-item">
                        <a
                            href="https://prisonfellowship.ca/get-involved/"
                            className="hover-trigger-menu-item"
                        >
                            <MainButton
                                text="Get Involved"
                                color="orange"
                                type="button"
                            />
                        </a>
                        <ul className="sub-menu">
                            <li id="menu-item-37352">
                                <a href="https://prisonfellowship.ca/calendar/category/pfcevents/">
                                    PFC Events
                                </a>
                            </li>
                            <li id="menu-item-107">
                                <a href="https://prisonfellowship.ca/get-involved/volunteer/">
                                    Volunteer
                                </a>
                            </li>
                            <li id="menu-item-108">
                                <a href="https://prisonfellowship.ca/resources/institutional-chaplains/">
                                    Institutional Chaplains
                                </a>
                            </li>
                            <li id="menu-item-82">
                                <a href="https://prisonfellowship.ca/get-involved/prayer-partners/">
                                    Prayer Partners
                                </a>
                                <ul className="sub-menu">
                                    <li id="menu-item-37358">
                                        <a href="https://prisonfellowship.ca/calendar/category/prayer-calendar/">
                                            Prayer Calendar
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-83">
                                <a href="https://prisonfellowship.ca/get-involved/raise-awareness/">
                                    Raise awareness
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="hover-trigger-menu-item">
                        <a
                            href="https://prisonfellowship.ca/donate-online/"
                            className="hover-trigger-menu-item"
                        >
                            <MainButton
                                text="Donate"
                                color="blue"
                                type="button"
                            />
                        </a>
                        <ul className="sub-menu two-cols one-row">
                            <li id="menu-item-1264">
                                <a href="https://prisonfellowship.ca/donate-online/pathway-partners/">
                                    Pathway Partners
                                </a>
                            </li>
                            <li id="menu-item-398">
                                <a href="https://prisonfellowship.ca/donate-online/ways-to-donate/">
                                    Ways to Donate
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <FaSearch />
            </div>
        </div>
    );
}
