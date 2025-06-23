import PFCLogo from "~/components/blocks/PFCLogo";
import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function PFCEventsCalendar() {
    const dateNow = new Date();
    const monthYear = dateNow.toLocaleDateString(undefined, {
        month: "long",
        year: "numeric",
    });

    let calendarGrid = [];
    let weekCounter = 0;
    for (let dayOfMonth = 1; dayOfMonth < 31; dayOfMonth++) {
        let className = "day-box ";
        if (dayOfMonth <= 7) {
            className += "firstRow ";
        }
        if (weekCounter === 6 || dayOfMonth === 30) {
            className += "lastBox ";
        }
        const dayBox = (
            <div className={className}>
                <span>{dayOfMonth}</span>
            </div>
        );
        if (weekCounter === 6) {
            weekCounter = 0;
        } else {
            weekCounter++;
        }
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
                        <span className="heading">MON</span>
                        <span className="heading">TUE</span>
                        <span className="heading">WED</span>
                        <span className="heading">THU</span>
                        <span className="heading">FRI</span>
                        <span className="heading">SAT</span>
                        <span className="heading">SUN</span>
                        {calendarGrid}
                    </div>
                </div>
            </div>
            <SpaceDivider />
        </div>
    );
}
