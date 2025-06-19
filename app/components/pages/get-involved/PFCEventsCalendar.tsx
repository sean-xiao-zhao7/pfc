import PFCLogo from "~/components/blocks/PFCLogo";

export default function PFCEventsCalendar() {
    const dateNow = new Date();
    const monthYear = dateNow.toLocaleDateString(undefined, {
        month: "long",
        year: "numeric",
    });

    return (
        <div className="page-container">
            <div className="slogan">
                <PFCLogo />
                <h1>PFC Events</h1>
            </div>
            <div className="body">
                <div className="calendar-container">
                    <div className="calendar-heading">
                        <h2>{monthYear}</h2>
                    </div>
                    <div className="days-of-week-heading">
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                        <span>SAT</span>
                        <span>SUN</span>
                    </div>
                    <div className="days-grid"></div>
                </div>
            </div>
        </div>
    );
}
