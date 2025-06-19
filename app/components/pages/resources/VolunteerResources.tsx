import { useState } from "react";
import PFCLogo from "~/components/blocks/PFCLogo";

export default function VolunteerResources() {
    const [accordionStates, setAccordionStates] = useState(
        new Array(7).fill("", 0)
    );

    const accordionChildClickHandler = (id: number) => {
        setAccordionStates((currentStates) => {
            const newStates = new Array(7).fill("", 0);
            if (currentStates[id] !== "shown") {
                newStates[id] = "shown";
            }
            return newStates;
        });
    };

    return (
        <div className="page-container" id="volunteer-resources">
            <div className="slogan">
                <PFCLogo />
                <h1>Volunteer Resources</h1>
            </div>
            <div className="body">
                <p>
                    Prison Fellowship Canada provides its volunteers with
                    resources that equip them with carrying out their ministry
                    faithfully. Below are some resources available to you as a
                    PFC volunteer. Visit this page regularly for ongoing
                    updates.
                </p>
                <div className="accordion">
                    <div className="child">
                        <div
                            className="child-heading"
                            onClick={() => accordionChildClickHandler(0)}
                        >
                            <h1>Recommended Books</h1>
                        </div>
                        <div className={"child-body " + accordionStates[0]}>
                            <h2>
                                The AfterGrief: Finding Your Way Along the Long
                                Arc of Loss – by Hope Edelman
                            </h2>
                            <p>
                                Aren’t you over it yet? Anyone who has
                                experienced a major loss in their past knows
                                this question. We’ve spent years fielding
                                versions of it, both explicit and implied, from
                                family, colleagues, acquaintances, and friends.
                                We recognize the subtle cues—the slight eyebrow
                                lift, the soft, startled “Oh! That long
                                ago?”—from those who wonder how an event so far
                                in the past can still occupy so much precious
                                mental and emotional real estate. Because of the
                                common but false assumption that grief should be
                                time-limited, too many of us believe we’re
                                grieving “wrong” when sadness suddenly resurges
                                sometimes months or even years after a loss. The
                                AfterGrief explains that the death of a loved
                                one isn’t something most of us get over, get
                                past, put down, or move beyond. Grief is not an
                                emotion to pass through on the way to “feeling
                                better.” Instead, grief is in constant motion;
                                it is tidal, easily and often reactivated by
                                memories and sensory events, and is re-triggered
                                as we experience life transitions,
                                anniversaries, and other losses. Whether we want
                                it to or not, grief gets folded into our
                                developing identities, where it informs our
                                thoughts, hopes, expectations, behaviors, and
                                fears, and we inevitably carry it forward into
                                everything that follows. Drawing on her own
                                encounters with the ripple effects of early
                                loss, as well as on interviews with dozens of
                                researchers, therapists, and regular people
                                who’ve been bereaved, New York Times bestselling
                                author Hope Edelman offers profound advice for
                                reassessing loss and adjusting the stories we
                                tell ourselves about its impact on our
                                identities. With guidance for reframing a story
                                of loss, finding equilibrium within it, and even
                                experiencing renewed growth and purpose in its
                                wake, she demonstrates that though grief is a
                                lifelong process, it doesn’t have to be a
                                lifelong struggle.
                            </p>
                            <h2>
                                When Helping Hurts – by Steve Corbett and Brian
                                Fikkert
                            </h2>
                            <p>
                                Poverty is much more than simply a lack of
                                material resources, and it takes much more than
                                donations and handouts to solve it. ‘When
                                Helping Hurts’ shows how some alleviation
                                efforts, failing to consider the complexities of
                                poverty, have actually (and unintentionally)
                                done more harm than good.
                            </p>
                            <h2>
                                Homeward – Life in the Year After Prison – Bruce
                                Western
                            </h2>
                            <p>
                                Quantitative and qualitative evidenced-based
                                research drives a better understanding of what
                                works and what doesn’t in successful ex-offender
                                community reintegration. This 2018 re-entry
                                study was conducted in Boston, Massachusetts.
                            </p>
                            <h2>
                                Addiction and Pastoral Care – Sonia E. Waters
                                and John Swinton
                            </h2>
                            <p>
                                Substance addictions present a unique set of
                                challenges for pastoral care. In this book Sonia
                                Waters weaves together personal stories,
                                research, and theological reflection to offer
                                helpful tools for ministers, counselors,
                                chaplains, and anyone else called to care
                                pastorally for those struggling with addiction.
                            </p>
                            <h2>From the Ashes – Jesse Thistle</h2>
                            <p>
                                This autobiographical book demonstrates how
                                difficult it is for individuals to come out of a
                                cycle of addiction and crime, particularly where
                                they have been abused and/or neglected and where
                                systemic racism is at play. This is a
                                heartwarming and heart-wrenching memoir.
                            </p>
                            <h2>
                                Transforming Twisted Thinking: Straight Thinkers
                                Accept Responsibility – Jerry Price
                            </h2>
                            <p>
                                Drawing upon life’s experiences, biblical
                                insights, and field-tested models for
                                transforming lives, Transforming Twisted
                                Thinking presents this combination in a
                                conversational style that does not spare honesty
                                in revealing personal twistedness or
                                forthrightness in offering God’s guidance. In
                                addition to 14 chapters that describe the
                                diverse ways people twist their own thinking,
                                four appendices offer resources on definitions
                                of terms, the allures of forbidden excitement,
                                advice for applying principles, and questions
                                for study and discussion.
                            </p>
                        </div>
                    </div>
                    <div className="child">
                        <div
                            className="child-heading"
                            onClick={() => accordionChildClickHandler(1)}
                        >
                            <h1>Volunteer Report</h1>
                        </div>
                        <div className={"child-body " + accordionStates[1]}>
                            <a
                                href="https://prisonfellowship.formstack.com/forms/volunteering_contact_report"
                                target="_blank"
                                rel="noopener"
                            >
                                Volunteer Reports for PFC By Phone, In-Prison
                                and Bridgecare programs
                            </a>
                        </div>
                    </div>
                    <div className="child">
                        <div
                            className="child-heading"
                            onClick={() => accordionChildClickHandler(2)}
                        >
                            <h1>
                                PFC By Phone - Handling Manipulative Callers
                            </h1>
                        </div>
                        <div className={"child-body " + accordionStates[2]}>
                            <span>
                                Please{" "}
                                <a
                                    href="https://prisonfellowship.ca/wp-content/uploads/2022/09/PFC-by-Phone-Handling-Manipulative-Callers-Aug-2022.pdf"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    click here
                                </a>{" "}
                                to access the document.&nbsp;
                            </span>
                        </div>
                    </div>
                    <div className="child">
                        <div
                            className="child-heading"
                            onClick={() => accordionChildClickHandler(3)}
                        >
                            <h1>
                                The Forgiveness Journey Handouts (Group
                                Curriculum)
                            </h1>
                        </div>
                        <div className={"child-body " + accordionStates[3]}>
                            <span>
                                Please{" "}
                                <a
                                    href="https://prisonfellowship.ca/wp-content/uploads/2022/09/PFC-by-Phone-Handling-Manipulative-Callers-Aug-2022.pdf"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    click here
                                </a>{" "}
                                to access the document.&nbsp;
                            </span>
                        </div>
                    </div>
                    <div className="child">
                        <div
                            className="child-heading"
                            onClick={() => accordionChildClickHandler(4)}
                        >
                            <h1>The Forgiveness Journey Handouts (Directed)</h1>
                        </div>
                        <div className={"child-body " + accordionStates[4]}>
                            <span>
                                <a
                                    href="https://prisonfellowship.ca/the-forgiveness-journey-handouts-directed/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://prisonfellowship.ca/the-forgiveness-journey-handouts-directed/
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="child">
                        <div
                            className="child-heading"
                            onClick={() => accordionChildClickHandler(5)}
                        >
                            <h1>The Re-entry Journey Handouts</h1>
                        </div>
                        <div className={"child-body " + accordionStates[5]}>
                            <span>
                                <a
                                    href="https://prisonfellowship.ca/the-re-entry-journey-handouts/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://prisonfellowship.ca/the-re-entry-journey-handouts/
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="child">
                        <div
                            className="child-heading"
                            onClick={() => accordionChildClickHandler(6)}
                        >
                            <h1>Walking The Good Path</h1>
                        </div>
                        <div className={"child-body " + accordionStates[6]}>
                            <span>
                                <a
                                    href="https://prisonfellowship.ca/walking-the-good-path/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    https://prisonfellowship.ca/walking-the-good-path/
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
