import PfcBlock from "~/components/blocks/PfcBlock";
import PfcButton from "~/components/buttons/PfcButton";

export default function InPrisonPrograms() {
    return (
        <div className="page-container" id="in-prison-programs">
            <div className="slogan">
                <h1>In Prison Programs</h1>
                <div className="center">
                    <p>
                        Therefore, if anyone is in Christ, the new creation has
                        come: The old has gone, the new is here!
                    </p>
                    <p>2 Corinthians 5:17</p>
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
                        Because crimes are often a result of choices we make,
                        learning constructive moral choices that build the
                        community is crucial. Scripture teaches that human
                        beings are born with the original sin, yet, it is
                        through the life, teachings and sacrifice of Jesus
                        Christ that we have hope. PFC’s mandate is to bring
                        life-changing transformation to prisoners using the
                        Gospel through the various programs we offer.
                    </p>
                </div>

                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/pages/in-prison-programs/Annual-Report-2021-Images-File-1_Page_11-980x654.jpg"
                            alt="Hand on shoulder"
                        />
                        <img
                            src="/images/shared/100102p_FaithJustice.png"
                            alt="faith & justice"
                        />
                        <div className="center">
                            <h2>IN-PRISON Curriculum</h2>
                            <p>
                                At Prison Fellowship Canada we believe that
                                transformation can be real for prisoners through
                                curriculums centred on the life and teachings of
                                Jesus Christ.
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
                            src="/images/shared/Annual-Report-2021-Images-File-1_Page_34-980x654.jpg"
                            alt="Calling prisoner"
                        />
                        <img
                            src="/images/shared
                            /PFC-By-Phone3.png"
                            alt="PFC by phone"
                        />
                        <div className="center">
                            <h2>PFC BY PHONE</h2>
                            <p>
                                PFC By Phone program provides individuals with
                                an opportunity to speak with our volunteer team
                                which helps them feel connected at a time when
                                they may experience isolation.
                            </p>
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </div>
                    </div>
                </div>

                <div className="testimony">
                    <div className="left">
                        <h1>Testimony</h1>
                        <p>
                            “I enjoyed the training yesterday and found it to be
                            the fastest three-hour zoom meeting ever, which is a
                            big compliment to you and your staff.”
                        </p>
                        <span>– An Institutional Chaplain</span>
                    </div>
                    <div className="right">
                        <img
                            src="/images/pages/in-prison-programs/P20-scaled.jpg"
                            alt="In prison group learning session."
                        />
                    </div>
                </div>

                <div>
                    <PfcBlock color="orange">
                        <div className="center">
                            <p>
                                And let us consider how we may spur one another
                                on toward love and good deeds
                            </p>
                            <p>HEBREWS 10:24</p>
                        </div>
                    </PfcBlock>
                </div>
            </div>
        </div>
    );
}
