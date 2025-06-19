import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function OurPrograms() {
    return (
        <div className="page-container" id="our-programs">
            <div className="slogan image-background lake">
                <h1>Our Programs</h1>
                <div className="center">
                    <p>
                        “I will go before you and level the mountains,
                        <br /> I will break in pieces the doors of bronze and
                        cut through the bars of iron.”
                    </p>
                    <p>Isaiah 45:2</p>
                </div>
            </div>
            <div className="body">
                <div className="center">
                    <img
                        src="/images/home/cropped-favicon.png"
                        alt="PFC logo"
                        className="pfc-logo"
                    />
                    <p>
                        PFC’s programs are designed to bring incarcerated and
                        released individuals the transformation that is felt and
                        seen in both the heart and the mind. This transformation
                        leads individuals to know they are a transformed new
                        creation as well as given the power of the Spirit to
                        align their will to the will of God and carry out His
                        commands.
                    </p>
                </div>
                <SpaceDivider />
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/pages/our-programs/prison-yard.jpg"
                            alt="Prison yard"
                        />
                        <div className="center">
                            <h2>IN-PRISON PROGRAMS</h2>
                            <p>
                                PFC’s Faith and Justice Series consists of three
                                in- prison programs designed to help prisoners
                                learn about the love of God and the love of
                                neighbour and to develop life skills that will
                                benefit them in the future.
                            </p>
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/our-programs/WEB-IMAGES-2_Page_46-980x700.jpg"
                            alt="People on street"
                        />
                        <div className="center">
                            <h2>IN-COMMUNITY PROGRAMS</h2>
                            <p>
                                In-Community programs are an integral part of
                                PFC’s ministry. From PFC’s Bridgecare program
                                which offers aftercare for prisoners, to
                                programs, designed to help prisoner’s families.
                                PFC Programs are all designed to help strengthen
                                the community and reduce recidivism.
                            </p>
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </div>
                    </div>
                </div>
                <SpaceDivider />
                <div className="testimony">
                    <div className="left">
                        <h1 className="cursive">Testimony</h1>
                        <p>
                            “Prison Fellowship Canada is playing a spiritual
                            mentoring role in my life and is helping me to be
                            honest, truthful, lawful, conscientious, generous,
                            compassionate and more Christ centred day by day.”
                        </p>
                        <p>– An inmate in Dorchester, New Brunswick.</p>
                    </div>
                    <div className="right with-text">
                        <img
                            src="/images/home/photos/restorative-justice.jpg"
                            alt="restorative justice"
                            className="with-text"
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
                            <a href="https://prisonfellowship.ca/our-programs/restorative-justice/">
                                <PfcButton
                                    text="Learn more"
                                    color="black"
                                    type="button"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <PfcBlock color="green">
                    <div className="center">
                        <p>
                            “Therefore, if anyone is in Christ, the new creation
                            has come: The old has gone, the new is here!”
                        </p>
                        <p>2 Corinthians 5:17</p>
                    </div>
                </PfcBlock>
            </div>
        </div>
    );
}
