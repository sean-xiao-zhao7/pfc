import { Link } from "react-router";
import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function RestorativeJustice() {
    return (
        <div className="page-container" id="restorative-justice">
            <div className="slogan image-background road">
                <h1>Restorative Justice</h1>
                <div className="center">
                    <p>
                        “Love and faithfulness meet together; righteousness and
                        peace kiss each other.”
                    </p>
                    <p>Psalm 85:10 (NIV)</p>
                </div>
            </div>
            <div className="body">
                <p className="page-intro">
                    In its essence, true justice is about making whole what has
                    been broken. While punishment is vital, it is not the end
                    goal of justice. This is where restorative justice comes in.
                    <br />
                    <br />
                    It identifies the harm done, takes responsibility and works
                    to restore and heal both victim and offender. At PFC, while
                    all our programs are restorative justice-focused, we have
                    two specifically designed restorative justice programs.
                </p>
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/shared/group-study.jpg"
                            alt="Hand on shoulder"
                        />
                        <div>
                            <div className="center">
                                <h2>THE SYCAMORE TREE</h2>
                            </div>
                            <p>
                                Our restorative justice program offers those who
                                have caused harm to others through crime and
                                those who have been harmed to gain a joint
                                understanding of the impact of crime and proceed
                                along the pathway to healing and transformation.
                            </p>
                            <div className="center">
                                <Link to="/our-programs/restorative-justice/sycamore-tree/">
                                    <PfcButton
                                        text="Learn more"
                                        color="black"
                                        type="button"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/shared/Annual-Report-2021-Images-File-1_Page_34-980x654.jpg"
                            alt="Calling prisoner"
                        />
                        <div>
                            <div className="center">
                                <h2>Restorative Prison</h2>
                            </div>
                            <p>
                                This program looks at an institution
                                holistically supporting, equipping and teaching
                                its staff and working alongside them with
                                incarcerated individuals and victims on their
                                pathway to healing.
                            </p>
                            <div className="center">
                                <Link to="/our-programs/restorative-justice/restorative-prison/">
                                    <PfcButton
                                        text="Learn more"
                                        color="black"
                                        type="button"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <SpaceDivider />
                <PfcBlock color="black">
                    <p>
                        “Restorative justice, or a circle of redemption, looks
                        principally to the future rather than to the past. It
                        seeks more to rebuild than to cut out – that is, it is
                        not primarily surgical, but curative.”
                    </p>
                    <p>T. Richard Snyder</p>
                </PfcBlock>
                <SpaceDivider />
                <div className="testimony">
                    <div className="left">
                        <h1 className="cursive">Michelle’s Story</h1>
                        <p>
                            “After her father has been killed, Michelle
                            naturally experienced grief, hurt and anger. In the
                            video Michelle offers a testimony of the impact that
                            PFC’s Restorative Justice program had on her healing
                            process.”
                        </p>
                    </div>
                    <div className="right">
                        <iframe
                            src="https://www.youtube.com/embed/RhuDwumqz2w"
                            title="Michelle's Story - PFC Sycamore Tree Project"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <SpaceDivider />
                <PfcBlock color="black">
                    <p>
                        “This is what the LORD Almighty said: 'Administer true
                        justice; show mercy and compassion to one another.' "
                    </p>
                    <p>Zechariah 7:9 (NIV)</p>
                </PfcBlock>
            </div>
        </div>
    );
}
