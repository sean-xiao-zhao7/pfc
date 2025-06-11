import PfcBlock from "~/components/blocks/PfcBlock";
import PfcButton from "~/components/buttons/PfcButton";

export default function RestorRestorativePrison() {
    return (
        <div
            className="page-container"
            id="restorative-prison
"
        >
            <div className="slogan image-background flower">
                <h1>Restorative Prison</h1>
            </div>
            <div className="body">
                <div className="center">
                    <p>
                        PFC recognizes that restoring the prison is equally
                        important to restoring the prisoner. The Restorative
                        Prison project looks at an institution holistically,
                        supporting and teaching both staff and residents in the
                        principles of Restorative Justice from a Biblical
                        perspective.
                    </p>
                </div>
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/pages/restorative-prison/WEB-IMAGES-2_Page-canpol-980x700.jpg"
                            alt="Officers"
                        />
                        <div className="center">
                            <h2>INSTITUTIONAL STAFF TRAINING</h2>
                            <p>
                                Staff training consists of a three-part training
                                process that equips and prepares Youth Services
                                Officers (YSOs) and Managers in Mental Health
                                First Aid, Trauma-informed care, and Restorative
                                Justice training.
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/shared/in-cell-study.png"
                            alt="In prison study"
                        />
                        <div className="center">
                            <h2>PRISONER’S PROGRAM</h2>
                            <p>
                                Prisoners participate in The Sycamore Tree
                                program (based on the story of Zaccheus) which
                                requires both individual and circle work. PFC
                                also offers Restorative Justice topical
                                sessions.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>What’s Involved?</h2>
                    <p>
                        The program begins with pre-contemplative work such as
                        understanding the history, scope and application of
                        Restorative Justice, understanding the relationship
                        between crime, individual sin, collective sin and harm
                        as well as a meaningful experience with victim empathy.
                    </p>
                    <p>
                        The work continues at the contemplative level as
                        participants work through active versus passive
                        responsibility, barriers to confession, truth-telling,
                        behavioural change (repentance), hearing the victim’s
                        story, absorbing and understanding the impact of the
                        victim’s story, writing an apology, sharing their own
                        story, making amends, symbolic restitution,
                        peacebuilding and peacekeeping, and finally making
                        meaning through reflection and learning of their own
                        crime.
                    </p>
                </div>

                <PfcBlock color="black">
                    <div className="center">
                        <p>
                            He has shown you, O mortal, what is good. And what
                            does the LORD require of you? To act justly and to
                            love mercy and to walk humbly with your God.
                        </p>
                        <p>Micah 6:8</p>
                    </div>
                </PfcBlock>
            </div>
        </div>
    );
}
