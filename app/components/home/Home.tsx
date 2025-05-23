import PfcButton from "../buttons/PfcButton";
import HeroCarousel from "./HeroCarousel";

export default function Home() {
    return (
        <main id="home">
            <HeroCarousel />

            {/* Facilitating Transformation */}
            <div id="after-carousel-contents-container">
                <div id="intro">
                    <div className="info">
                        <img
                            src="/images/home/cropped-favicon.png"
                            alt="PFC logo"
                        />
                        <h1>Facilitating Transformation</h1>
                        <p>
                            Prison Fellowship Canada meets people where they are
                            in their journey towards freedom. Whether a person
                            is a prisoner, ex-prisoner, a child of an
                            incarcerated parent, or the greater community
                            including victims, we recognize that the effects of
                            crime are far reaching. We also recognize that God’s
                            unconditional love, grace and mercy reaches even
                            further and to each and every one of us.
                        </p>
                        <p>
                            We welcome you to join us in seeing lives
                            transformed… those whose whom we serve… and our own…
                        </p>
                        <PfcButton color="black" text="LEARN MORE" />
                    </div>
                    <iframe
                        src="https://www.youtube.com/embed/CqjnuF1bU_Q"
                        title="Prison Fellowship Canada - Pathway to Change"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Happening Now at PFC */}

                <div id="happening">
                    <h1>Happening Now at PFC</h1>
                    <div>
                        <div className="inner">
                            <img
                                src="/images/home/hero/item-1-kid.png"
                                alt="angel tree camping"
                            />
                            <h2>The 2025 Angel Tree Camping Season is here!</h2>
                        </div>
                        <div className="inner">
                            <div className="fluid-width-video-wrapper">
                                <iframe
                                    title="Stacey Campbell - Prison Fellowship Canada"
                                    data-src="https://www.youtube.com/embed/qERUHQ2kXlc?feature=oembed"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    src="https://www.youtube.com/embed/qERUHQ2kXlc?feature=oembed"
                                    data-load-mode="1"
                                    name="fitvid1"
                                ></iframe>
                            </div>
                            <h2>
                                LEARN MORE ABOUT PFC’S PARTNERSHIP WITH THE 700
                                CLUB
                            </h2>
                        </div>
                    </div>
                </div>

                {/* PROGRAMS */}

                <div id="programs">
                    <h1>PROGRAMS</h1>
                    <div className="inner">
                        <div>
                            <img
                                src="/images/home/photos/in-cell-study.png"
                                alt="in cell study"
                            />
                            <h2>prisoners</h2>
                            <p>
                                PFC’s prison programs focus on providing
                                life-changing hope and skills to incarcerated
                                individuals through a variety of programs we
                                offer.
                            </p>
                            <PfcButton text="Learn more" color="black" />
                        </div>
                        <div>
                            <img
                                src="/images/home/photos/group-study.jpg"
                                alt="in cell study"
                            />
                            <h2>ex-prisoners</h2>
                            <p>
                                People released from prison with a support
                                system experience a more secure sense of
                                reintegration. PFC’s Bridgcare program is
                                designed to provide this essential support.
                            </p>
                            <PfcButton text="Learn more" color="black" />
                        </div>
                        <div>
                            <img
                                src="/images/home/photos/group-kids.jpg"
                                alt="in cell study"
                            />
                            <h2>PRISONERS' FAMILIES</h2>
                            <p>
                                PFC’s Angel Tree programs are designed to create
                                connections with children and their incarcerated
                                parents and community while also helping to
                                reduce their anxiety.
                            </p>
                            <PfcButton text="Learn more" color="black" />
                        </div>
                    </div>
                </div>

                {/* Testimony / RESTORATIVE JUSTICE */}

                <div id="testimony">
                    <div className="left">
                        <h1>Testimony</h1>
                        <p>
                            “Prison Fellowship Canada is playing a spiritual
                            mentoring role in my life and is helping me to be
                            honest, truthful, lawful, conscientious, generous,
                            compassionate and more Christ centred day by day.”
                        </p>
                        <span>– An inmate in Dorchester, New Brunswick.</span>
                    </div>
                    <div className="right">
                        <img
                            src="/images/home/photos/restorative-justice.jpg"
                            alt="restorative justice"
                        />
                        <div>
                            <h1>RESTORATIVE JUSTICE</h1>
                            <p>
                                Restorative justice takes brokenness and works
                                to make it whole. Only when individuals are
                                restored and healed can the cycle of crime end.
                                PFC believes in the crucial work of restorative
                                justice and we offer multiple programs that help
                                heal all those affected by crime.
                            </p>
                            <PfcButton text="Learn more" color="black" />
                        </div>
                    </div>
                </div>

                {/* SIGN UP TO STAY UP TO DATE */}

                <div id="sign-up">
                    <h1>
                        SIGN UP TO STAY UP TO DATE ON WHAT’S HAPPENING WITH
                        PRISON FELLOWSHIP Canada
                    </h1>
                    <form>
                        <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            placeholder="Last Name"
                        />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                        <button type="submit">Sign up</button>
                    </form>
                </div>

                {/* triple columns */}

                <div id="triple-columns">
                    <div>
                        <img
                            src="/images/home/photos/prayer-calendar.png"
                            alt="in cell study"
                        />
                        <h2>PRAYER CALENDAR</h2>
                    </div>
                    <div>
                        <img
                            src="/images/home/photos/annual-reports.jpg"
                            alt="in cell study"
                        />
                        <h2>ANNUAL REPORTS</h2>
                    </div>
                    <div>
                        <img
                            src="/images/home/photos/recommended-reading.jpg"
                            alt="in cell study"
                        />
                        <h2>RECOMMENDED READING</h2>
                    </div>
                </div>

                {/* get involved */}

                <div id="get-involved">
                    <h1>
                        This ministry is made possible by the hard work of our
                        volunteers and the generosity of our supporters. If you
                        are interested in learning more about how you can get
                        involved, click below.
                    </h1>
                    <PfcButton text="GET INVOLVED" color="orange" />
                    <PfcButton text="DONATE HERE" color="blue" />
                </div>
            </div>
        </main>
    );
}
