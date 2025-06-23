import { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import PFCLogo from "~/components/blocks/PFCLogo";
import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function PFCEventsCalendar() {
    // calc initial month and year based on Now
    const dateNow = new Date();
    const monthNow = dateNow.toLocaleDateString(undefined, {
        month: "numeric",
    });
    const yearNow = dateNow.toLocaleDateString(undefined, {
        year: "numeric",
    });

    // set up dynamic month and data
    const [month, setMonth] = useState(+monthNow);
    const currentMonthDate = new Date(+yearNow, month, 0);
    const totalDays = currentMonthDate.getDate();
    const monthString = currentMonthDate.toLocaleDateString(undefined, {
        month: "long",
    });

    let calendarGrid = [];
    let weekCounter = 0;
    for (let dayOfMonth = 1; dayOfMonth < totalDays + 1; dayOfMonth++) {
        let className = "day-box ";
        if (dayOfMonth <= 7) {
            className += "firstRow ";
        }
        if (weekCounter === 6 || dayOfMonth === totalDays) {
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

    const changeMonthHandler = (changeVal: number) => {
        setMonth((currentMonth) => {
            const newMonth = currentMonth + changeVal;
            if (newMonth === 13) {
                return 1;
            } else if (newMonth === 0) {
                return 12;
            }
            return newMonth;
        });
    };

    return (
        <div className="page-container">
            <div className="slogan">
                <PFCLogo />
                <h1>PFC Events</h1>
            </div>
            <div className="body">
                <div className="calendar-container">
                    <div className="calendar-heading">
                        <div
                            className="control"
                            onClick={() => changeMonthHandler(-1)}
                        >
                            <BiSolidLeftArrow />
                        </div>
                        <h2>{monthString + " " + yearNow}</h2>
                        <div
                            className="control"
                            onClick={() => changeMonthHandler(1)}
                        >
                            <BiSolidRightArrow />
                        </div>
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
