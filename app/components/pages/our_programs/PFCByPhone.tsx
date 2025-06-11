import PfcBlock from "~/components/blocks/PfcBlock";
import PfcButton from "~/components/buttons/PfcButton";

export default function PFCByPhone() {
    return (
        <div className="page-container" id="PFC-by-phone">
            <div className="center">
                <img
                    src="/images/pages/shared/PFC-By-Phone3.png"
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
            <div className="body two-cols">
                <div className="box">
                    <img
                        src="/images/pages/pfc-by-phone/PFByPhone6.png"
                        alt="Phone inside prison"
                    />
                    <div className="center">
                        <h2>PURPOSE OF THE PROGRAM</h2>
                        <p>
                            The purpose of these calls is for conversation,
                            spiritual friendship, and prayer, in an effort to
                            encourage prisoners in their spiritual journey.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <img
                        src="/images/pages/shared/Annual-Report-2021-Images-File-1_Page_34-980x654.jpg"
                        alt="Calling prison"
                    />
                    <div className="center">
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
            </div>
        </div>
    );
}
