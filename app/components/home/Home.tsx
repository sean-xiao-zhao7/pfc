import PfcButton from "../buttons/PfcButton";
import HeroCarousel from "./HeroCarousel";

export default function Home() {
    return (
        <main id="home">
            <HeroCarousel />
            <div id="intro">
                <div className="info">
                    <img
                        src="/images/home/cropped-favicon.png"
                        alt="PFC logo"
                    />
                    <h1>Facilitating Transformation</h1>
                    <p>
                        Prison Fellowship Canada meets people where they are in
                        their journey towards freedom. Whether a person is a
                        prisoner, ex-prisoner, a child of an incarcerated
                        parent, or the greater community including victims, we
                        recognize that the effects of crime are far reaching. We
                        also recognize that God’s unconditional love, grace and
                        mercy reaches even further and to each and every one of
                        us.
                    </p>
                    <p>
                        We welcome you to join us in seeing lives transformed…
                        those whose whom we serve… and our own…
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
        </main>
    );
}
