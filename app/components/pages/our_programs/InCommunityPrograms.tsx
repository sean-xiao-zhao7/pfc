import { Link } from "react-router";
import FullWidthContainer from "~/components/blocks/FullWidthContainer";
import PfcBlock from "~/components/blocks/PfcBlock";
import PfcButton from "~/components/buttons/PfcButton";

export default function InCommunityPrograms() {
    return (
        <div className="page-container" id="in-community-programs">
            <div className="slogan image-background reading">
                <h1>In Community Programs</h1>
            </div>
            <div className="body">
                <div className="center">
                    <img
                        src="/images/home/cropped-favicon.png"
                        alt="PFC logo"
                        className="pfc-logo"
                    />
                    <p>
                        Whether it is released individuals or families of
                        incarcerated persons, they all may experience from time
                        to time anxiety that comes from sense of isolation and
                        shame. PFC’s in-community program are designed support
                        both released individuals as well as children of
                        incarcerated parents in order to build safer Canadian
                        communities.
                    </p>
                </div>
                <div className="two-cols two-image-rows">
                    <div className="box">
                        <img
                            src="/images/pages/in-community-programs/Annual-Report-2021-Images-File-1_Page_01-980x653.jpg"
                            alt="bridgecare"
                        />
                        <img
                            src="/images/shared/100102p_Bridgecare.png"
                            alt="bridgecare icon"
                        />
                        <div className="center">
                            <p>
                                PFC’s Faith & Justice series, which is offered
                                in community, consists of three programs
                                designed to help released individuals integrate
                                confidently and safely into the community.
                            </p>
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/in-community-programs/Annual-Report-2021-Images-File-1_Page_16-980x656.jpg"
                            alt="bridgecare"
                        />
                        <img
                            src="/images/shared/100102p_FaithJustice.png"
                            alt="bridgecare icon"
                        />
                        <div className="center">
                            <p>
                                People released from prison with a support
                                system experience a more secure sense of
                                reintegration and contribute to public safety.
                                PFC’s Bridgecare program steps in to offer this
                                support.
                            </p>
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </div>
                    </div>
                </div>
                <PfcBlock color="black">
                    <div className="center">
                        <p>
                            And let us consider how we may spur one another on
                            toward love and good deeds
                        </p>
                        <p>HEBREWS 10:24</p>
                    </div>
                </PfcBlock>

                <div className="two-cols">
                    <img
                        src="/images/pages/in-community-programs/WEB-IMAGES-2_Page_36-980x702.jpg"
                        alt="playing soccer"
                    />
                    <div className="box center">
                        <img
                            src="/images/shared/100102p_AngelTree.png"
                            alt="angel tree"
                            className="non-child"
                        />
                        <p>
                            There are over 357,000 children affected by parental
                            incarceration in Canada. These children often carry
                            the weight of shame and the stigmatization of their
                            peers. At PFC we recognize the importance of the
                            healing journey of the family of those who are
                            incarcerated. The Angel Tree program offers a number
                            of programs that help children know they are loved.
                        </p>
                        <Link to="/our-programs/in-community-programs/angel-tree/">
                            <PfcButton
                                color="black"
                                text="Learn more"
                                type="button"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <FullWidthContainer backgroundImageName="reading">
                <div className="body">
                    <p>
                        OUR LIBRARY CONTAINS AN EXTENSIVE COLLECTION OF
                        RESOURCES THAT MAY HELP YOU
                    </p>
                    <PfcButton text="Learn more" type="button" color="black" />
                </div>
            </FullWidthContainer>
        </div>
    );
}
