import { Link } from "react-router";
import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";
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
                <p className="page-intro">
                    Because crimes are often a result of choices we make,
                    learning constructive moral choices that build the community
                    is crucial. Scripture teaches that human beings are born
                    with the original sin, yet, it is through the life,
                    teachings and sacrifice of Jesus Christ that we have hope.
                    PFC’s mandate is to bring life-changing transformation to
                    prisoners using the Gospel through the various programs we
                    offer.
                </p>

                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/pages/in-prison-programs/Annual-Report-2021-Images-File-1_Page_11-980x654.jpg"
                            alt="Hand on shoulder"
                        />
                        <div className="center">
                            <img
                                src="/images/shared/100102p_FaithJustice.png"
                                alt="faith & justice"
                                className="size-auto"
                            />
                            <h2>Faith & Justice Series</h2>
                        </div>
                        <p>
                            At Prison Fellowship Canada we believe that
                            transformation can be real for prisoners through
                            curriculums centred on the life and teachings of
                            Jesus Christ.
                        </p>
                        <div className="center">
                            <Link to="/our-programs/prisoners/in-prison-programs/faith-justice/">
                                <PfcButton
                                    text="Learn more"
                                    color="black"
                                    type="button"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/shared/Annual-Report-2021-Images-File-1_Page_34-980x654.jpg"
                            alt="Calling prisoner"
                        />
                        <div className="center">
                            <img
                                src="/images/shared/PFC-By-Phone3.png"
                                alt="PFC by phone"
                                className="size-auto"
                            />
                            <h2>PFC BY PHONE</h2>
                        </div>
                        <p>
                            PFC By Phone program provides individuals with an
                            opportunity to speak with our volunteer team which
                            helps them feel connected at a time when they may
                            experience isolation.
                        </p>
                        <div className="center">
                            <Link to="/our-programs/prisoners/in-prison-programs/pf-by-phone/">
                                <PfcButton
                                    text="Learn more"
                                    color="black"
                                    type="button"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <SpaceDivider />
                <PfcBlock color="orange">
                    <div className="center">
                        <p>
                            And let us consider how we may spur one another on
                            toward love and good deeds
                        </p>
                        <p>HEBREWS 10:24</p>
                    </div>
                </PfcBlock>
                <SpaceDivider />
                <div className="testimony">
                    <div className="left">
                        <h2>Testimony</h2>
                        <p>
                            “I enjoyed the training yesterday and found it to be
                            the fastest three-hour zoom meeting ever, which is a
                            big compliment to you and your staff.”
                        </p>
                        <p>– An Institutional Chaplain</p>
                    </div>
                    <div className="right">
                        <img
                            src="/images/pages/in-prison-programs/P20-scaled.jpg"
                            alt="In prison group learning session."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
