import ExternalNewWindowLink from "~/components/blocks/ExternalNewWindowLink";
import PFCLogo from "~/components/blocks/PFCLogo";
import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function WaysToDonate() {
    return (
        <div className="page-container" id="ways-to-donate">
            <div className="slogan">
                <PFCLogo />
                <h1>Ways to Give</h1>
            </div>
            <div className="body">
                <p>
                    IMPORTANT NOTE: Due to the current Canada Post Service
                    Disruption, we welcome you to consider one of the below
                    options for supporting the ministry as an alternative to
                    mailing a cheque:
                </p>
                <div className="two-cols align-baseline">
                    <div className="box">
                        <h2>Give online</h2>
                        <p>
                            Make a secure donation online. Click{" "}
                            <a
                                href="https://prisonfellowship.ca/dontate/donate-online/"
                                target="_blank"
                                rel="noopener"
                            >
                                here
                            </a>{" "}
                            to donate.
                        </p>
                        <h2>E-Transfers</h2>
                        <p>
                            Make a contribution through an interac e-transfer
                            to:{" "}
                            <a href="mailto:info@prisonfellowship.ca">
                                info@prisonfellowship.ca
                            </a>
                            .
                        </p>
                    </div>
                    <div className="box">
                        <h2>Become a Pathway Partner</h2>
                        <p>
                            Monthly donations can be made by cheque or credit
                            card. It is easy to set up and provide ongoing
                            support and resources to the organization. Get
                            started by clicking{" "}
                            <a
                                href="https://prisonfellowship.ca/dontate/donate-online/"
                                target="_blank"
                                rel="noopener"
                            >
                                here
                            </a>{" "}
                            to donate, or print and complete{" "}
                            <ExternalNewWindowLink
                                text="this form"
                                href="https://prisonfellowship.ca/wp-content/uploads/2022/03/monthly-donation-form-nov-2022.pdf"
                            />{" "}
                            then send it to our office via email or mail.
                        </p>
                    </div>
                    <div className="box">
                        <h2>Call our office</h2>
                        <p>
                            Make a donation through the phone using a credit
                            card.
                        </p>
                        <p>
                            1-844-618-5867 or <br />
                            905-673-5867
                        </p>
                    </div>
                </div>
                <h2>Other Ways to Contribute</h2>
                <div className="two-cols align-baseline">
                    <div className="box">
                        <h3>Planned Giving</h3>
                        <p>
                            Make your gift of a lifetime – create a legacy of
                            hope for the future. Please remember us when you are
                            making your bequests.
                        </p>
                    </div>
                    <div className="box">
                        <h3>In Memory Donation</h3>
                        <p>
                            To honour the memory of a loved one make a special
                            gift to the organization in their name. Please
                            contact us and we’ll provide you with all the
                            details.
                        </p>
                    </div>
                    <div className="box">
                        <h3>Special Occasions</h3>
                        <p>
                            Looking to give your loved one a gift? Many parents
                            and grandparents make donations at Christmas in the
                            name of their children or grandchildren.
                        </p>
                        <p>
                            Getting married? You can choose to gift your wedding
                            day favours in the name of your wedding guests.
                        </p>
                        <p>
                            Please call 1.844.618.5867 or 905.673.5867 for more
                            information and we’ll provide you with all the
                            details
                        </p>
                    </div>
                </div>
            </div>
            <SpaceDivider />
        </div>
    );
}
