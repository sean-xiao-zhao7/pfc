import { useState } from "react";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import { books } from "~/data/books";

export default function RecommendedReading() {
    const [currentCat, setCurrentCat] = useState("addiction");

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
                    <SpaceDivider />
                    <div className="contents">
                        {books[currentCat].map((currentBook) => (
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
