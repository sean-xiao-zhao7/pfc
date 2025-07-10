import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import MainButton from "~/components/buttons/MainButton";

export default function MainMenuContents() {
    const [menuShown, setMenuShown] = useState(-1);

    useEffect(() => {
        const handler = () => {
            if (window.pageYOffset > 300) {
                if (
                    !document
                        .querySelector("#main-logo")
                        ?.classList.contains("shrunk")
                ) {
                    document
                        .querySelector("#main-logo")
                        .classList.add("shrunk");
                    document
                        .querySelector("#main-menu-right-contents")
                        .classList.add("shrunk");
                }
            } else if (window.pageYOffset < 200) {
                if (
                    document
                        .querySelector("#main-logo")
                        ?.classList.contains("shrunk")
                ) {
                    document
                        .querySelector("#main-logo")
                        .classList.remove("shrunk");
                    document
                        .querySelector("#main-menu-right-contents")
                        .classList.remove("shrunk");
                }
            }
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const menuClickHandler = (e: MouseEvent<HTMLAnchorElement>, id: number) => {
        e.preventDefault();
        setMenuShown((current) => (id === current ? -1 : id));
    };

    const onBlurHandler = () => {
        setMenuShown(-1);
    };

    return (
        <div id="main-menu-contents-container">
            <div id="main-menu-left-contents">
                <Link to="/">
                    <img
                        src="/images/icons/main_square.png"
                        alt="PFC logo"
                        id="main-logo"
                    />
                </Link>
                <div id="main-menu-left-contents-mobile">
                    <ul className="nav">
                        <li className="hover-trigger-menu-item">
                            <Link
                                to="/about-us/"
                                onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                                    menuClickHandler(e, 0)
                                }
                            >
                                About PFC{" "}
                                {menuShown === 0 ? (
                                    <MdKeyboardArrowUp />
                                ) : (
                                    <MdKeyboardArrowDown />
                                )}
                            </Link>
                            <ul
                                className={
                                    "sub-menu" +
                                    (menuShown == 0 ? " visible" : "")
                                }
                            >
                                <li id="menu-item-68">
                                    <Link to="/about-us/who-we-are/">
                                        Who We Are
                                    </Link>
                                </li>
                                <li id="menu-item-35931">
                                    <Link to="/facilitating-transformation/">
                                        Facilitating Transformation
                                    </Link>
                                </li>
                                <li id="menu-item-102">
                                    <Link to="/about-us/pfc-team/">
                                        PFC Team
                                    </Link>
                                </li>
                                <li id="menu-item-105">
                                    <Link to="/about-us/our-board/">
                                        Our Board
                                    </Link>
                                </li>
                                <li id="menu-item-850">
                                    <Link to="/about-us/regional-offices/">
                                        Regional Offices
                                    </Link>
                                </li>
                                <li id="menu-item-98">
                                    <Link to="/about-us/our-financials/">
                                        Our Financials
                                    </Link>
                                </li>
                                <li id="menu-item-851">
                                    <Link to="/about-us/statement-of-faith/">
                                        Statement of Faith
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className="hover-trigger-menu-item"
                            onBlur={onBlurHandler}
                        >
                            <Link
                                to="/pfc-programs/"
                                onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                                    menuClickHandler(e, 1)
                                }
                            >
                                Programs{" "}
                                {menuShown === 1 ? (
                                    <MdKeyboardArrowUp />
                                ) : (
                                    <MdKeyboardArrowDown />
                                )}
                            </Link>
                            <ul
                                className={
                                    "sub-menu " +
                                    (menuShown == 1 ? " visible" : "")
                                }
                            >
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
                                            <ul>
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
                        </li>
                        <li className="hover-trigger-menu-item">
                            <Link
                                to="/resources/"
                                onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                                    menuClickHandler(e, 2)
                                }
                            >
                                Resources{" "}
                                {menuShown === 2 ? (
                                    <MdKeyboardArrowUp />
                                ) : (
                                    <MdKeyboardArrowDown />
                                )}
                            </Link>
                            <ul
                                className={
                                    "sub-menu" +
                                    (menuShown == 2 ? " visible" : "")
                                }
                            >
                                <li id="menu-item-64">
                                    <Link to="/resources/books/">
                                        Recommend Readings
                                    </Link>
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
                        </li>
                    </ul>
                </div>
                <ul className="button-menu mobile">
                    <li className="hover-trigger-menu-item">
                        <Link to="/get-involved/">
                            <MainButton
                                text="Get Involved"
                                color="orange"
                                type="button"
                            />
                        </Link>
                        <ul className="sub-menu">
                            <li id="menu-item-37352">
                                <Link to="/calendar/category/pfcevents/">
                                    PFC Events
                                </Link>
                            </li>
                            <li id="menu-item-107">
                                <Link to="/get-involved/volunteer/">
                                    Volunteer
                                </Link>
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
                    </li>
                    <li className="hover-trigger-menu-item">
                        <Link to="/donate-online/">
                            <MainButton
                                text="Donate"
                                color="blue"
                                type="button"
                            />
                        </Link>
                        <ul className="sub-menu two-cols one-row">
                            <li id="menu-item-1264">
                                <Link to="/donate-online/pathway-partners/">
                                    Pathway Partners
                                </Link>
                            </li>
                            <li id="menu-item-398">
                                <Link to="/donate-online/ways-to-donate/">
                                    Ways to Donate
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="main-menu-right-contents">
                <ul className="nav">
                    <li className="hover-trigger-menu-item">
                        <Link to="/about-us/">
                            About PFC <MdKeyboardArrowDown />
                        </Link>
                        <ul className="sub-menu">
                            <li id="menu-item-68">
                                <Link to="/about-us/who-we-are/">
                                    Who We Are
                                </Link>
                            </li>
                            <li id="menu-item-35931">
                                <Link to="/facilitating-transformation/">
                                    Facilitating Transformation
                                </Link>
                            </li>
                            <li id="menu-item-102">
                                <Link to="/about-us/pfc-team/">PFC Team</Link>
                            </li>
                            <li id="menu-item-105">
                                <Link to="/about-us/our-board/">Our Board</Link>
                            </li>
                            <li id="menu-item-850">
                                <Link to="/about-us/regional-offices/">
                                    Regional Offices
                                </Link>
                            </li>
                            <li id="menu-item-98">
                                <Link to="/about-us/our-financials/">
                                    Our Financials
                                </Link>
                            </li>
                            <li id="menu-item-851">
                                <Link to="/about-us/statement-of-faith/">
                                    Statement of Faith
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="hover-trigger-menu-item">
                        <Link
                            to="/pfc-programs/"
                            className="hover-trigger-menu-item"
                        >
                            Our Programs <MdKeyboardArrowDown />
                        </Link>
                        <ul className="sub-menu one-row">
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
                                        <ul>
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
                    </li>
                    <li className="hover-trigger-menu-item">
                        <Link
                            to="/resources/"
                            className="hover-trigger-menu-item"
                        >
                            Resources <MdKeyboardArrowDown />
                        </Link>
                        <ul className="sub-menu">
                            <li id="menu-item-64">
                                <Link to="/resources/books/">
                                    Recommend Readings
                                </Link>
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
                    </li>
                </ul>
                <ul className="button-menu">
                    <li className="hover-trigger-menu-item">
                        <Link
                            to="/get-involved/"
                            className="hover-trigger-menu-item"
                        >
                            <MainButton
                                text="Get Involved"
                                color="orange"
                                type="button"
                            />
                        </Link>
                        <ul className="sub-menu">
                            <li id="menu-item-37352">
                                <Link to="/calendar/category/pfcevents/">
                                    PFC Events
                                </Link>
                            </li>
                            <li id="menu-item-107">
                                <Link to="/get-involved/volunteer/">
                                    Volunteer
                                </Link>
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
                    </li>
                    <li className="hover-trigger-menu-item">
                        <Link
                            to="/donate-online/"
                            className="hover-trigger-menu-item"
                        >
                            <MainButton
                                text="Donate"
                                color="blue"
                                type="button"
                            />
                        </Link>
                        <ul className="sub-menu two-cols one-row">
                            <li id="menu-item-1264">
                                <Link to="/donate-online/pathway-partners/">
                                    Pathway Partners
                                </Link>
                            </li>
                            <li id="menu-item-398">
                                <Link to="/donate-online/ways-to-donate/">
                                    Ways to Donate
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
