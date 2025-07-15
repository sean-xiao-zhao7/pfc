import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function PFCByPhone() {
    return (
        <div className="page-container" id="PFC-by-phone">
            <div className="center simple-slogan">
                <img
                    src="/images/shared/PFC-By-Phone3.png"
                    alt="PFC by phone"
                />
                <div className="center">
                    <p>
                        Prisoners often experience feelings of fear, anxiety,
                        isolation, and hopelessness. Having people to speak with
                        through the support of chaplaincy can help them process
                        their experiences and reflect on where they are at in
                        their journey of restoration.
                    </p>
                </div>
            </div>
            <div className="body">
                <div className="two-cols">
                    <div>
                        <h2>PURPOSE OF THE PROGRAM</h2>
                        <p>
                            The purpose of these calls is for conversation,
                            spiritual friendship, and prayer, in an effort to
                            encourage prisoners in their spiritual journey.
                        </p>
                    </div>
                    <img
                        src="/images/pages/pfc-by-phone/PFByPhone6.png"
                        alt="Phone inside prison"
                    />
                    <img
                        src="/images/shared/Annual-Report-2021-Images-File-1_Page_34-980x654.jpg"
                        alt="Calling prison"
                    />
                    <div>
                        <h2>HOW THE PROGRAM WORKS</h2>
                        <p>
                            Prison Fellowship Canada by Phone (PFC By Phone)
                            gives prisoners the opportunity to call for free an
                            approved toll-free number from inside the
                            institution and be connected to a trained PFC
                            volunteer program leader.
                        </p>
                    </div>
                </div>
                <SpaceDivider />
            </div>
        </div>
    );
}
