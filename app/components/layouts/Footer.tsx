import TopLinks from "./menu/TopLinks";
import PfcButton from "../buttons/PfcButton";

export default function Footer() {
    return (
        <div id="footer">
            <img src="/images/home/cropped-favicon.png" alt="PFC logo" />
            <div className="donate-container">
                <a href="https://prisonfellowship.ca/get-involved/">
                    <PfcButton
                        text="GET INVOLVED"
                        color="orange"
                        type="button"
                    />
                </a>
                <a href="https://prisonfellowship.ca/donate-online/">
                    <PfcButton text="DONATE HERE" color="blue" type="button" />
                </a>
            </div>
            <div className="sub-menus-container">
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
                <ul className="sub-menu">
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
                </ul>
                <ul className="sub-menu">
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
            </div>
            <TopLinks />
            <p>© 2025 Prison Fellowship Canada | All Rights Reserved</p>
        </div>
    );
}
