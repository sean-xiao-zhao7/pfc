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
                            <div class="fluid-width-video-wrapper">
                                <iframe
                                    title="Stacey Campbell - Prison Fellowship Canada"
                                    data-src="https://www.youtube.com/embed/qERUHQ2kXlc?feature=oembed"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    src="https://www.youtube.com/embed/qERUHQ2kXlc?feature=oembed"
                                    class=" lazyloaded"
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
                    <div className="inner"></div>
                </div>

                {/* Testimony / RESTORATIVE JUSTICE */}

                <div id="testimony"></div>

                {/* SIGN UP TO STAY UP TO DATE */}

                <div id="sign-up"></div>

                {/* triple columns */}

                <div id="triple-columns"></div>

                {/* get involved */}

                <div id="get-involved"></div>
            </div>
        </main>
    );
}
