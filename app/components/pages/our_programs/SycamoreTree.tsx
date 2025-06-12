import { Link } from "react-router";

export default function SycamoreTree() {
    return (
        <div className="page-container" id="sycamore-tree">
            <div className="slogan image-background tree">
                <h1>The Sycamore Tree</h1>
                <img
                    src="/images/shared/100102p_FaithJustice.png"
                    alt="Faith & Justice"
                />
            </div>
            <div className="body">
                <div className="center">
                    <img
                        src="/images/home/cropped-favicon.png"
                        alt="PFC logo"
                        className="pfc-logo"
                    />
                    <p>
                        In 1996 Prison Fellowship International gifted The
                        Sycamore Tree Project to National Affiliates around the
                        world to further the work of Restorative Justice. Prison
                        Fellowship Canada began working with the program in 2015
                        and has recently revised the program to include
                        responses to what we have learned through the work with
                        many offenders, victims, and chaplains who gather with
                        us in an effort to contribute to Shalom – nothing less
                        than all of creation healed.
                    </p>
                </div>
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/shared/group-study.jpg"
                            alt="Group study"
                        />
                    </div>
                    <div className="box">
                        <h2>HOW THE PROGRAM WORKS</h2>
                        <p>
                            The program takes its name from the story of
                            Zacchaeus and his encounter with Jesus (Luke 19:1-
                            10) Program participants explore the effects of
                            crime on victims, offenders, and the community.
                            Prisoners come to the understanding of the harm that
                            crime causes both to victims and the community.
                            Victims begin to understand the humanity and
                            brokenness of prisoners and begin to reflect on
                            their own experience in a way that assists their
                            healing.
                        </p>
                        <p>
                            Offenders confront, often for the first time both
                            their own issues that led to crime and the effects
                            and impact of the harms they have caused others. The
                            program works because it offers a safe,
                            non-judgmental space to explore the hard issues, it
                            allows for offenders and victims to share their
                            stories which is often the beginning of their
                            healing and reflective exercises throughout allow
                            participants to make life changes that result in
                            active responsibility with on-going accountability.
                        </p>
                    </div>
                </div>

                <div className="center">
                    <h2>THE SYCAMORE TREE PROGRAM IS OFFERED BOTH IN</h2>
                    <div className="two-cols small">
                        <div className="box">
                            <a
                                href="/our-programs/prisoners/in-prison-programs/"
                                target="_blank"
                                rel="noopener"
                            >
                                <img
                                    src="/images/shared/in-cell-study.png"
                                    alt="in cell study"
                                />
                                <h2>IN PRISON</h2>
                            </a>
                        </div>
                        <div className="box">
                            <Link to="/our-programs/in-community-programs">
                                <img
                                    src="/images/shared/group-chat-150x150.jpg"
                                    alt="in community programs"
                                />
                                <h2>IN COMMUNITY</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
