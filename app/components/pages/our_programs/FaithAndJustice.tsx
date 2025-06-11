import PfcBlock from "~/components/blocks/PfcBlock";
import PfcButton from "~/components/buttons/PfcButton";

export default function FaithAndJustice() {
    return (
        <div className="page-container" id="faith-and-justice">
            <div className="center simple-slogan">
                <img
                    src="/images/shared/100102p_FaithJustice.png"
                    alt="Faith & Justice"
                />
                <div className="center">
                    <p>
                        The Faith & Justice series is an in-prison and
                        in-community Bible study series that consists of three
                        programs designed to help incarcerated individuals grow
                        spiritually and practically.
                    </p>
                </div>
            </div>
            <div className="body two-cols">
                <div className="box">
                    <img
                        src="/images/pages/faith-and-justice/Annual-Report-2021-Images-File-1_Page_29-980x654.jpg"
                        alt="man in wheat field"
                    />
                    <div className="center">
                        <h2>THE FORGIVENESS JOURNEY</h2>
                        <p>
                            Forgiveness is a hard concept to grasp and accept,
                            particularly if you have done something that has
                            left you with a deep sense of guilt or shame. This
                            program focuses on God’s unconditional love and His
                            offer to forgive everyone regardless of their past
                            or what they have done or how far they are from Him.
                            His mercy, grace and love for each person is greater
                            than any guilt and comes first – before anything.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <img
                        src="/images/pages/faith-and-justice/WEB-IMAGES-2_Page_46-2048x1463.jpg"
                        alt="people walking in streets"
                    />
                    <div className="center">
                        <h2>THE RE-ENTRY JOURNEY</h2>
                        <p>
                            This program centres around practical life skills
                            that are Biblically based. It is written to reach a
                            diverse audience regardless of their age, culture or
                            education level. The program demonstrates a
                            committed and careful use of Scripture and contains
                            insights from a variety of disciplines.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <img
                        src="/images/pages/faith-and-justice/1-4b992d58-71de-4355-8867-3a45459b5949-1024x688.jpg"
                        alt="tree and road"
                    />
                    <div className="center">
                        <h2>Walking the good path</h2>
                        <p>
                            Based on the metaphors and images used to describe
                            Jesus in the Gospel of John, this program is about
                            discovering who Jesus is and that His way is the
                            good path of life.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <img
                        src="/images/pages/faith-and-justice/people-talking-in-a-circle.jpg"
                        alt="people talking in a group"
                    />
                    <div className="center">
                        <h2>The SYCAMORE TREE</h2>
                        <p>
                            Our restorative justice program offers those who
                            have caused harm to others through crime and those
                            who have been harmed to gain a joint understanding
                            of the impact of crime and proceed along the pathway
                            to healing and transformation.
                        </p>
                        <PfcButton
                            text="Learn more"
                            color="black"
                            type="button"
                        />
                    </div>
                </div>
            </div>
            <div className="body">
                <PfcBlock color="black">
                    <div className="center">
                        <h1>Testimonies</h1>
                        <p>
                            We have seen a couple of prisoners experience
                            transformation recently during The Prisoner’s
                            Journey. One of them just broke out crying in the
                            middle of a session, so the Chaplain took him into
                            the office and ministered to him.
                        </p>
                        <p>– PFC Volunteer, Regina Correctional Centre 12</p>
                    </div>
                </PfcBlock>
            </div>
        </div>
    );
}
