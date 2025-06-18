import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function RecommendedReading() {
    return (
        <div className="page-container" id="recommended-reading">
            <div className="slogan image-background books">
                <h1>Recommended Reading</h1>
            </div>
            <SpaceDivider />
            <div className="body">
                <div className="resources-tabs">
                    <div className="headings">
                        <span>Addiction</span>
                        <span>Aftercare and Recidivism</span>
                        <span>Boundaries</span>
                        <span>Devotionals</span>
                        <span>Grace</span>
                        <span>Indigenous</span>
                        <span>Mental Health</span>
                        <span>Spiritual Darkness</span>
                        <span>Spiritual Mentorship</span>
                        <span>Crime and Punishment: History &amp; Theory</span>
                        <span>Biblical/Theological Foundations</span>
                        <span>Prison Chaplaincy</span>
                        <span>Sociology</span>
                        <span>Memoirs/Reflections</span>
                        <span>Restorative Justice</span>
                        <span>Others</span>
                    </div>
                    <div className="contents"></div>
                </div>
            </div>
            <SpaceDivider />
        </div>
    );
}
