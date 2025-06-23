import PFCLogo from "~/components/blocks/PFCLogo";
import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function InstitutionalChaplains() {
    return (
        <div className="page-container" id="institutional-chaplains">
            <div className="slogan">
                <PFCLogo />
                <h1>Institutional Chaplains</h1>
            </div>
            <div className="body">
                <p>
                    Prison Fellowship Canada is pleased to partner with
                    Correctional Institutions to support the Christian
                    programming offered within federal and provincial
                    correctional institutions across Canada.Prison Fellowship
                    Canada is pleased to partner with Correctional Institutions
                    to support the Christian programming offered within federal
                    and provincial correctional institutions across Canada.
                </p>
                <p className="center">Below are the available PFC programs.</p>
                <SpaceDivider />
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/pages/get-involved/Group-Study.jpg"
                            alt="group study"
                        />
                    </div>
                    <div>
                        <h2 className="cursive">Faith & Justice Series</h2>
                        <p>
                            PFC is currently offering 3 curriculum programs in
                            prison. These programs are Bible study series
                            designed to help incarcerated individuals grow both
                            spiritually and practically. The Re-entry Journey:
                            This program centres around practical life skills
                            that are Biblically based. Specifically, the
                            sessions cover listening skills, communication,
                            conflict resolution, anger management, job
                            readiness, and money management.
                        </p>
                        <ul>
                            <li>Available as a group or 1:1 format</li>
                            <li>
                                Facilitated by a PFC trained Volunteer Program
                                Leader
                            </li>
                            <li>A Certificate-based program</li>
                        </ul>
                        <h3>The Forgiveness Journey</h3>
                        <p>
                            PFC Program facilitators guide the group in
                            discussions around God’s persistent love and offer
                            to forgive all people no matter who they are, no
                            matter what they have done or have not done, no
                            matter how terrible the things they have done are,
                            and no matter where they are in relationship to Him.
                        </p>
                        <ul>
                            <li>Available as a group or 1:1 format</li>
                            <li>
                                Facilitated by a PFC trained Volunteer Program
                                Leader
                            </li>
                            <li>A Certificate-based program</li>
                        </ul>
                        <h3>The Sycamore Tree</h3>
                        <p>
                            Participants take part in a process that helps them
                            understand their crime and its impact and then take
                            responsibility for it.
                        </p>
                        <ul>
                            <li>
                                Facilitated by a PFC trained Volunteer Program
                                Leader.
                            </li>
                            <li>
                                Participation requires the chaplain’s approval,
                                application and interview.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="two-cols">
                    <div>
                        <h2 className="cursive">Prison Fellowship By Phone</h2>
                        <p>
                            This program gives prisoners the opportunity to call
                            an approved toll-free number from inside the
                            institution and be connected to a trained PFC
                            volunteer program leader. Prisoners often experience
                            feelings of fear, anxiety, isolation, and
                            hopelessness.
                        </p>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/get-involved/Prisoner-on-phone-scaled.jpg"
                            alt="prisoner on phone"
                        />
                    </div>
                </div>
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/pages/get-involved/PATH-IMAGE.jpg"
                            alt="walking on path"
                        />
                    </div>
                    <div>
                        <h2 className="cursive">Bridgecare</h2>
                        <p>
                            Bridgecare is a core program of PFC which seeks to
                            fill a gap and support prisoners as they leave
                            correctional institutions and re-enter communities
                            in a safe and respectful manner for all. Community
                            reintegration can be a daunting and complex task
                            particularly when individual struggles with mental
                            health issues, addiction, and/or broken
                            relationships. Having poor or no support in place
                            can make this nearly impossible. PFC recognizes the
                            need for a stable community, employment, and housing
                            as essential to ensuring the success of both program
                            participants and the communities they are returning
                            to.
                        </p>
                        <p>
                            Candidates are identified through the chaplaincy or
                            other institutional staff.
                        </p>
                    </div>
                </div>
                <div className="two-cols">
                    <div>
                        <h2 className="cursive">Angel Tree Program</h2>
                        <p>
                            Research shows that children who stay connected to
                            parents in prison or jail are less likely to exhibit
                            disruptive behaviours or experience anxiety.
                            Further, it is also proven that these children are
                            more likely to initiate social interaction and test
                            better in academic, emotional, and social outcomes.
                            With over 357,000 children of incarcerated parents
                            nationally, PFC’s Angel Tree programs play an
                            important part in the creation of a protective and
                            supportive environment for children of incarcerated
                            parents to grow and develop.
                        </p>
                        <h3>Angel Tree Christmas Program</h3>
                        <p>
                            Approved sponsors purchase a gift for a child of an
                            incarcerated parent and deliver it in time for
                            Christmas.
                        </p>
                        <p>
                            Applications are submitted through the chaplaincy
                            department.
                        </p>
                        <h3>Angel Tree Camping program</h3>
                        <p>
                            Children get to participate in a summer camp where
                            they experience adventure, make friends and build
                            memories.
                        </p>
                        <p>
                            Applications are submitted through the chaplaincy
                            department.
                        </p>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/get-involved/Kids-Laughing.jpg"
                            alt="kid laughing"
                        />
                    </div>
                </div>
                <SpaceDivider />
            </div>
        </div>
    );
}
