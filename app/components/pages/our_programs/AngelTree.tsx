import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function AngelTree() {
    return (
        <div className="page-container" id="angel-tree">
            <div className="center simple-slogan">
                <img
                    src="/images/shared/100102p_AngelTree.png"
                    alt="Angel Tree"
                />
                <p>
                    Prison Fellowship Canada understands that the complete
                    journey of reconciliation and restoration for prisoners and
                    ex-prisoners critically includes supporting their families,
                    particularly their children. PFC’s Angel Tree program
                    partners with churches, individuals and the community to
                    provide opportunities for children to feel connected to
                    their parents and help them develop their unique skills and
                    gifts.
                </p>
            </div>
            <div className="body">
                <div className="two-cols">
                    <div className="center">
                        <img
                            src="/images/pages/angel-tree/ATX-girl.png"
                            alt="child"
                        />
                        <h2>Angel Tree Christmas</h2>
                        <PfcButton
                            text="Learn More"
                            type="button"
                            color="black"
                        />
                    </div>
                    <div className="center">
                        <img
                            src="/images/pages/angel-tree/ATX-running.png"
                            alt="running kids"
                        />
                        <h2>Angel Tree Camping</h2>
                        <PfcButton
                            text="Learn More"
                            type="button"
                            color="black"
                        />
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
