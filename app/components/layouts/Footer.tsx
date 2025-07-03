import TopLinks from "./menu/TopLinks";
import PfcButton from "../buttons/PfcButton";
import { Link } from "react-router";
import PFCLogo from "../blocks/PFCLogo";

export default function Footer() {
    return (
        <div id="footer">
            <PFCLogo />
            <div className="donate-container">
                <Link to="/get-involved/">
                    <PfcButton
                        text="GET INVOLVED"
                        color="orange"
                        type="button"
                    />
                </Link>
                <Link to="/donate-online/">
                    <PfcButton text="DONATE HERE" color="blue" type="button" />
                </Link>
            </div>
            <div className="sub-menus-container">
                <ul className="sub-menu">
                    <li id="menu-item-37352">
                        <Link to="/calendar/category/pfcevents/">
                            PFC Events
                        </Link>
                    </li>
                    <li id="menu-item-107">
                        <Link to="/get-involved/volunteer/">Volunteer</Link>
                    </li>
                    <li id="menu-item-108">
                        <Link to="/resources/institutional-chaplains/">
                            Institutional Chaplains
                        </Link>
                    </li>
                    <li id="menu-item-82">
                        <Link to="/get-involved/prayer-partners/">
                            Prayer Partners
                        </Link>
                        <ul className="sub-menu">
                            <li id="menu-item-37358">
                                <Link to="/calendar/category/prayer-calendar/">
                                    Prayer Calendar
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-83">
                        <Link to="/get-involved/raise-awareness/">
                            Raise awareness
                        </Link>
                    </li>
                </ul>
                <ul className="sub-menu">
                    <li id="menu-item-830">
                        <Link to="/our-programs/prisoners/in-prison-programs/">
                            In Prison Programs
                        </Link>
                        <ul>
                            <li id="menu-item-75">
                                <Link to="/our-programs/prisoners/in-prison-programs/faith-justice/">
                                    Faith &amp; Justice
                                </Link>
                            </li>
                            <li id="menu-item-76">
                                <Link to="/our-programs/prisoners/in-prison-programs/pf-by-phone/">
                                    PFC By Phone
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-77">
                        <Link to="/our-programs/restorative-justice/">
                            Restorative Justice
                        </Link>
                        <ul>
                            <li id="menu-item-1143">
                                <Link to="/our-programs/restorative-justice/sycamore-tree/">
                                    The Sycamore Tree
                                </Link>
                            </li>
                            <li id="menu-item-766">
                                <Link to="/our-programs/restorative-justice/restorative-prison/">
                                    Restorative Prison
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="sub-menu">
                    <li id="menu-item-80">
                        <Link to="/our-programs/in-community-programs/">
                            In Community Programs
                        </Link>
                        <ul>
                            <li id="menu-item-79">
                                <Link to="/our-programs/in-community-programs/bridgecare/">
                                    Bridgecare
                                </Link>
                                <ul className="sub-menu">
                                    <li id="menu-item-1257">
                                        <Link to="/our-programs/in-community-programs/bridgecare/1life/">
                                            1Life
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-771">
                                <Link to="/our-programs/in-community-programs/angel-tree/">
                                    Angel Tree
                                </Link>
                                <ul className="sub-menu">
                                    <li id="menu-item-89">
                                        <Link to="/our-programs/in-community-programs/angel-tree/angel-tree-camping/">
                                            Angel Tree Camping
                                        </Link>
                                    </li>
                                    <li id="menu-item-90">
                                        <Link to="/our-programs/in-community-programs/angel-tree/angel-tree-christmas/">
                                            Angel Tree Christmas
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="sub-menu">
                    <li id="menu-item-64">
                        <Link to="/resources/books/">Recommend Readings</Link>
                    </li>
                    <li id="menu-item-1714">
                        <Link to="/resources/institutional-chaplains-partners/">
                            Institutional Chaplain Partners
                        </Link>
                    </li>
                    <li id="menu-item-100">
                        <Link to="/resources/churches-volunteers/church-resources/">
                            Church Resources
                        </Link>
                    </li>
                    <li id="menu-item-101">
                        <Link to="/resources/churches-volunteers/volunteer-resources/">
                            Volunteer Resources
                        </Link>
                    </li>
                    <li id="menu-item-772">
                        <Link
                            target="_blank"
                            to="https://prisonfellowshipbridgecare.ca/"
                        >
                            Ex-Prisoner Resources
                        </Link>
                    </li>
                </ul>
            </div>
            <TopLinks />
            <p>© 2025 Prison Fellowship Canada | All Rights Reserved</p>
        </div>
    );
}
