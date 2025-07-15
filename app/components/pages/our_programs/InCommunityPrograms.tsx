import { Link } from "react-router";
import FullWidthContainer from "~/components/blocks/FullWidthContainer";
import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function InCommunityPrograms() {
    return (
        <div className="page-container" id="in-community-programs">
            <div className="slogan image-background reading">
                <h1>In Community Programs</h1>
            </div>
            <div className="body">
                <p className="page-intro">
                    Whether it is released individuals or families of
                    incarcerated persons, they all may experience from time to
                    time anxiety that comes from sense of isolation and shame.
                    <br />
                    <br />
                    PFC's in-community program are designed support both
                    released individuals as well as children of incarcerated
                    parents in order to build safer Canadian communities.
                </p>
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
                        <p>
                            PFC's Faith & Justice series, which is offered in
                            community, consists of three programs designed to
                            help released individuals integrate confidently and
                            safely into the community.
                        </p>
                        <Link to="/our-programs/in-community-programs/bridgecare/">
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </Link>
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
                        <p>
                            People released from prison with a support system
                            experience a more secure sense of reintegration and
                            contribute to public safety. PFC’s Bridgecare
                            program steps in to offer this support.
                        </p>
                        <Link to="/our-programs/prisoners/in-prison-programs/faith-justice/">
                            <PfcButton
                                text="Learn more"
                                color="black"
                                type="button"
                            />
                        </Link>
                    </div>
                </div>
                <div className="two-cols">
                    <img
                        src="/images/pages/in-community-programs/WEB-IMAGES-2_Page_36-980x702.jpg"
                        alt="playing soccer"
                    />
                    <div>
                        <div className="center">
                            <img
                                src="/images/shared/100102p_AngelTree.png"
                                alt="angel tree"
                                className="non-child"
                            />
                        </div>
                        <p>
                            There are over 357,000 children affected by parental
                            incarceration in Canada. These children often carry
                            the weight of shame and the stigmatization of their
                            peers. At PFC we recognize the importance of the
                            healing journey of the family of those who are
                            incarcerated. The Angel Tree program offers a number
                            of programs that help children know they are loved.
                        </p>
                        <div className="center">
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
                <SpaceDivider />
                <PfcBlock color="black">
                    <div className="center">
                        <p>
                            And let us consider how we may spur one another on
                            toward love and good deeds.
                        </p>
                        <p>Hebrews 10:24 (NIV)</p>
                    </div>
                </PfcBlock>
            </div>
            <FullWidthContainer backgroundImageName="reading">
                <div className="body">
                    <p>
                        OUR LIBRARY CONTAINS AN EXTENSIVE COLLECTION OF
                        RESOURCES THAT MAY HELP YOU
                    </p>
                    <Link to="/resources/books">
                        <PfcButton
                            text="Learn more"
                            type="button"
                            color="black"
                        />
                    </Link>
                </div>
            </FullWidthContainer>
        </div>
    );
}
