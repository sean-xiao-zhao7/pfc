import { useState } from "react";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import { books } from "~/data/books";

export default function RecommendedReading() {
    const [cat, setCat] = useState({
        id: 0,
        highlights: new Array(16).fill(true, 0, 1).fill(false, 1),
    });

    function tabClickHandler(newId: number) {
        setCat((currentCat) => {
            const newCat = {
                id: newId,
                highlights: new Array(16)
                    .fill(false, 0)
                    .fill(true, newId, newId + 1),
            };
            return newCat;
        });
    }

    return (
        <div className="page-container" id="recommended-reading">
            <div className="slogan image-background books">
                <h1>Recommended Reading</h1>
            </div>
            <SpaceDivider />
            <div className="body">
                <div className="resources-tabs">
                    <div className="headings">
                        <span
                            onClick={() => tabClickHandler(0)}
                            className={cat.highlights[0] ? "current" : ""}
                        >
                            Addiction
                        </span>
                        <span
                            onClick={() => tabClickHandler(1)}
                            className={cat.highlights[1] ? "current" : ""}
                        >
                            Aftercare and Recidivism
                        </span>
                        <span
                            onClick={() => tabClickHandler(2)}
                            className={cat.highlights[2] ? "current" : ""}
                        >
                            Boundaries
                        </span>
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
                    <SpaceDivider />
                    <div className="contents">
                        {books[cat.id].map((currentBook) => (
                            <div className="book-container">
                                <img src={currentBook.imgUrl} alt="book" />
                                <div className="book-info">
                                    <h2>{currentBook.title}</h2>
                                    <p>{currentBook.intro}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SpaceDivider />
        </div>
    );
}
