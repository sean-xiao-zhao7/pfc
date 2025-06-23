import PFCLogo from "~/components/blocks/PFCLogo";
import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function PFCEventsCalendar() {
    const dateNow = new Date();
    const monthYear = dateNow.toLocaleDateString(undefined, {
        month: "long",
        year: "numeric",
    });

    let calendarGrid = [];
    for (let dayOfMonth = 1; dayOfMonth < 31; dayOfMonth++) {
        const dayBox = (
            <div className="day-box">
                <span>{dayOfMonth}</span>
            </div>
        );
        calendarGrid.push(dayBox);
    }

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
                    <div className="calendar-day-grid">
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                        <span>SAT</span>
                        <span>SUN</span>
                        {calendarGrid}
                    </div>
                </div>
            </div>
            <SpaceDivider />
        </div>
    );
}
