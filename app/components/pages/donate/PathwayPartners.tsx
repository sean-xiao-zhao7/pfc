import PFCLogo from "~/components/blocks/PFCLogo";
import MainButton from "~/components/buttons/MainButton";

export default function PathwayPartners() {
    return (
        <div className="page-container" id="pathway-partners">
            <div className="slogan contain-text">
                <PFCLogo />
                <h1>PATHWAY PARTNERS</h1>
                <p>
                    “For we are God’s handiwork, created in Christ Jesus to do
                    good works, which God prepared in advance for us to do.”
                    Ephesians 2:10 (NIV)
                </p>
            </div>
            <div className="body">
                <p>
                    Over the years, Prison Fellowship Canada (PFC) witnessed
                    time and time again, that walking the pathway from shame to
                    hope was a solitary journey for many prisoners across
                    Canada. To change that, PFC and its network of
                    volunteers/churches walk with prisoners, ex-prisoners and
                    their families to bring the reassurance of hope and
                    restoration.
                </p>
                <div className="two-cols">
                    <img
                        src="/images/pages/donate/discussionjpg.jpg"
                        alt="discussion"
                    />
                    <div className="box">
                        <h2>HOW YOUR REGULAR MONTHLY GIFT HELPS</h2>
                        <ul>
                            <li>
                                <p>
                                    Your regular monthly gift ensures people
                                    seeking support can receive:
                                </p>
                            </li>
                            <li>
                                <p>Hope through ministry inside prison.</p>
                            </li>
                            <li>
                                <p>
                                    Wholeness through restorative justice
                                    circles and victim/offender reconciliation.
                                    Community reintegration support.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Transformed experiences through restorative
                                    justice training for corrections staff.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>WHY GIVING MONTHLY MATTERS</h2>
                        <ul>
                            <li>
                                <p>
                                    It’s Simple – Your contributions are
                                    automatically made month after month, making
                                    your sustaining support worry-free and easy.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Greater Impact – By becoming a Pathway
                                    Partner, your faithful gift ensures Prison
                                    Fellowship Canada is present, day after day,
                                    consistently – impacting lives with the
                                    transformational message of Jesus Christ.
                                </p>
                            </li>
                            <li>
                                <p>
                                    You Go Behind the Scenes with Us – As we
                                    share exclusive Pathway Partner stories and
                                    updates, you’ll get an insider view on this
                                    critical work for those your gift directly
                                    impacts in-prison, or after their prison
                                    experience.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <img
                        src="/images/pages/donate/prisoner.jpg"
                        alt="prisoner"
                    />
                </div>
                <p>
                    Quite simply, this work would not be sustainable without the
                    support of monthly partners across the country. Please, join
                    us on the pathway to hope.
                </p>
            </div>
        </div>
    );
}
