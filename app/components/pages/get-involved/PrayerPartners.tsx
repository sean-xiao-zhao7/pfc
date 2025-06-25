import PFCLogo from "~/components/blocks/PFCLogo";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function PrayerPartners() {
    return (
        <div className="page-container" id="prayer-partners">
            <div className="slogan">
                <PFCLogo />
                <h1>Prayer Partners</h1>
                <p className="center">
                    Carry each other’s burdens, and in this way you will fulfill
                    the law of Christ.
                </p>
                <p className="center">Galatians 6:2</p>
            </div>
            <div className="body">
                <p className="center">
                    See below for this month's prayers - would you join us in
                    daily prayers for the ministry?
                </p>
                <div className="two-cols">
                    <div className="box center">
                        <img
                            src="/images/pages/get-involved/calendar_coffee.png"
                            alt="coffee calendar"
                        />
                        <a
                            href="https://mcusercontent.com/4a6eb310ab75ce3622e93d2ac/files/7e901f67-6b99-d997-91e8-6f4b6d7150f4/PrayerCalendar_Digital_JanEng_2025.pdf?utm_source=Monthly+Prayer+Calendar&utm_campaign=0850af33d0-EMAIL_CAMPAIGN_2017_07_01_COPY_01&utm_medium=email&utm_term=0_47bdc1849c-0850af33d0-&mc_cid=0850af33d0&mc_eid=UNIQID"
                            rel="noopener"
                            target="_blank"
                        >
                            <PfcButton text="Recent Calendar PDF Download" />
                        </a>
                    </div>
                    <div className="box center">
                        <img
                            src="/images/pages/get-involved/laptop.png"
                            alt="laptop"
                        />
                        <a
                            href="https://prisonfellowship.ca/calendar/category/prayer-calendar/month/?utm_source=Monthly+Prayer+Calendar&utm_campaign=31e3f4610d-EMAIL_CAMPAIGN_2017_07_01_COPY_01&utm_medium=email&utm_term=0_47bdc1849c-31e3f4610d-502300721&mc_cid=31e3f4610d&mc_eid=cbdc15753e&utm_source=Monthly+Prayer+Calendar&utm_campaign=0850af33d0-EMAIL_CAMPAIGN_2017_07_01_COPY_01&utm_medium=email&utm_term=0_47bdc1849c-0850af33d0-&mc_cid=0850af33d0&mc_eid=UNIQID"
                            rel="noopener"
                            target="_blank"
                        >
                            <PfcButton text="Online Calendar" />
                        </a>
                    </div>
                </div>
                <SpaceDivider />
            </div>
        </div>
    );
}
