import { Link } from "react-router";
import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function AngelTree() {
    return (
        <div className="page-container" id="angel-tree">
            <div className="center angel-tree-intro-image">
                <PfcBlock color="orange">
                    <img
                        src="/images/shared/100102p_AngelTree.png"
                        alt="Angel Tree"
                    />
                </PfcBlock>
            </div>
            <div className="body">
                <p className="page-intro">
                    Prison Fellowship Canada understands that the complete
                    journey of reconciliation and restoration for prisoners and
                    ex-prisoners critically includes supporting their families,
                    particularly their children.
                    <br />
                    <br />
                    PFC’s Angel Tree program partners with churches, individuals
                    and the community to provide opportunities for children to
                    feel connected to their parents and help them develop their
                    unique skills and gifts.
                </p>
                <h2>TWO PROGRAMS</h2>
                <div className="two-cols">
                    <div>
                        <img
                            src="/images/pages/angel-tree/ATX-girl.png"
                            alt="child"
                        />
                        <div className="center">
                            <h2>Angel Tree Christmas</h2>
                        </div>
                        <p>
                            PFC’s Angel Tree Christmas program connects church
                            communities and individuals with the families of
                            prisoners through the delivery of a Christmas gift
                            on behalf of the incarcerated parent.
                        </p>
                        <Link to="/our-programs/in-community-programs/angel-tree/angel-tree-christmas/">
                            <PfcButton
                                text="Learn More"
                                type="button"
                                color="black"
                            />
                        </Link>
                    </div>
                    <div>
                        <img
                            src="/images/pages/angel-tree/ATX-running.png"
                            alt="running kids"
                        />
                        <div className="center">
                            <h2>Angel Tree Camping</h2>
                        </div>
                        <p>
                            Angel Tree Camping program connects church
                            communities and individuals with the families of
                            prisoners through a Summer Camp experience.
                        </p>
                        <Link to="/our-programs/in-community-programs/angel-tree/angel-tree-camping/">
                            <PfcButton
                                text="Learn More"
                                type="button"
                                color="black"
                            />
                        </Link>
                    </div>
                </div>
                <SpaceDivider />
                <PfcBlock color="green">
                    <div className="center">
                        <p>
                            Start children off on the way they should go, and
                            even when they are old they will not turn from it.
                        </p>
                        <p>PROVERBS 22:6</p>
                    </div>
                </PfcBlock>
            </div>
        </div>
    );
}
