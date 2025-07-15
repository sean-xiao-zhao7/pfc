import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function WhoWeAre() {
    return (
        <div className="page-container" id="who-we-are">
            <div className="slogan">
                <img
                    src="/images/home/cropped-favicon.png"
                    alt="PFC logo"
                    className="pfc-logo"
                />
                <h1>Who We Are</h1>
            </div>
            <div className="body">
                <p className="page-intro less-margin">
                    Prison Fellowship Canada’s mandate is to meet people who
                    have committed crimes or who are impacted by crime –
                    families of prisoners or victims of crime – wherever they
                    are in their journey, to facilitate reconciliation and the
                    freedom that it brings.
                </p>
                <h2>OUR VALUES</h2>
                <div className="three-col-boxes-container">
                    <div className="col">
                        <div className="box">
                            <h3>Prayer</h3>
                            <p>
                                We believe that we are called by God to share
                                his grace and love with prisoners, ex-prisoners,
                                their families, and victims of crime; to uphold
                                worth, dignity and justice for all. We
                                acknowledge God as our sovereign source of
                                direction, wisdom, and protection and depend on
                                Him for all things through prayer
                            </p>
                        </div>
                        <div className="box">
                            <h3>Growth</h3>
                            <p>
                                We are committed to growing the ministry across
                                Canada with God’s favour upon us, while not
                                losing sight of the individuals for whom and
                                with whom we serve on a day-to-day basis.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <h3>Respect for All</h3>
                            <p>
                                We make our programs and services available to
                                all without consideration of race, religion,
                                creed, gender, abilities, age or national
                                origin; we are responsive to and respect
                                diversity; we value the dignity of all people–
                                those who we serve, our volunteers, our staff,
                                our partners and supporters. We are committed to
                                working together in mutual respect for each
                                other as staff, volunteers, board, and donors
                                across the diversity of Christian traditions,
                                history and denominations.
                            </p>
                        </div>
                        <div className="box">
                            <h3>Clarity</h3>
                            <p>
                                We seek clarity of God’s direction, through
                                prayer, the reading of Scripture and the wisdom
                                from our PFC network as well as the Christian
                                community. We seek to provide clarity through
                                clear, direct and ongoing communication in all
                                of our oral and written expressions.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <h3>Integrity & Accountability</h3>
                            <p>
                                We are committed to openness and to doing the
                                right things in the right ways. We are committed
                                to delivering on our promises so that the people
                                we serve, those who work with us, our donors,
                                the community, and criminal justice officials
                                can believe what we say and trust what we do. We
                                are committed to holding each other and
                                ourselves accountable for our actions and
                                values. We are committed to being clear about
                                what we expect from ourselves and others; and to
                                providing truthful and responsible explanations
                                of performance results to the Board, our donors,
                                VIPs, staff and other stakeholders.
                            </p>
                        </div>
                        <div className="box">
                            <h3>Encouragement</h3>
                            <p>
                                With each individual we are connected to, we
                                seek to live out the command provided in 1
                                Thessalonians 5:11: Therefore encourage one
                                another and build each other up, just as in fact
                                you are doing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="two-col-green-boxes-container">
                    <div className="box">
                        <h2>OUR VISION</h2>
                        <p>
                            Our vision is to be a national community of
                            reconciliation and restoration to prisoners,
                            ex-prisoners, their families and victims using a
                            faith-based approach to transformation based on the
                            life and teachings of Jesus Christ.
                        </p>
                    </div>
                    <div className="box">
                        <h2>OUR MISSION</h2>
                        <p>
                            Our mission is to prepare and mobilize the Canadian
                            Christian community in response to the issue of
                            crime and the restoration of prisoners.
                        </p>
                    </div>
                </div>
            </div>
            <div className="slogan">
                <img
                    src="/images/home/cropped-favicon.png"
                    alt="PFC logo"
                    className="pfc-logo"
                />
                <h1>Our Beginning</h1>
            </div>
            <div className="two-cols body">
                <img
                    src="/images/pages/whoweare/street.jpg"
                    alt="Our beginnings"
                />
                <div className="page-intro">
                    <p>
                        Finding himself in prison after holding a prominent
                        political role, Chuck Colson experienced the
                        transformation that only the Gospel can provide.
                    </p>
                    <p className="emphasis">
                        He says, “I found myself increasingly drawn to the idea
                        that God had put me in prison for a purpose and that I
                        should do something for those I had left behind”.
                    </p>
                    <p>
                        From there, an important and life- changing ministry was
                        born.
                    </p>
                </div>
            </div>
            <SpaceDivider />
        </div>
    );
}
