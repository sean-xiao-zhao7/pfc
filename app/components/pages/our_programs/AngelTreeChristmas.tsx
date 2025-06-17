import IFrame from "~/components/blocks/IFrame";
import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function AngelTreeChristmas() {
    return (
        <div className="page-container" id="angel-tree-christmas">
            <div className="center simple-slogan">
                <img
                    src="/images/pages/angel-tree-christmas/PFC-ATX-Web-Banner-24-scaled.jpg"
                    alt="Angel Tree Christmas"
                />
            </div>
            <div className="body">
                <p className="center">
                    PFC’s Angel Tree Christmas program connects church
                    communities and individuals with the families of prisoners
                    through the delivery of a Christmas gift on behalf of the
                    incarcerated parent. Through this program, children not only
                    receive a gift under the tree at Christmas but maintain
                    connections and bonds with their incarcerated parent.
                </p>
                <div className="center">
                    <PfcButton
                        color="green"
                        text="CLICK HERE TO DONATE TODAY!"
                        type="button"
                    />
                </div>
                <IFrame
                    url={"https://www.youtube.com/embed/eP_dZzKHCsM"}
                    className={"full-width"}
                />
                <PfcBlock color="black">
                    <div className="center">
                        <h2 className="cursive">Testimonies</h2>
                        <p>
                            Angel Tree has meant so much to my kids being on the
                            receiving end for many years. For my daughter, it’s
                            about sharing a moment with her Dad when she opens
                            the gift on the phone with him. She really wanted to
                            make that happen for someone else this year.”
                        </p>
                        <p>
                            – Mother of an Angel Tree Christmas gift Recipient
                        </p>
                    </div>
                </PfcBlock>
                <div>
                    <h2>LAST YEAR’S PROGRAM IMPACT</h2>
                    <div className="three-cols">
                        <div className="center">
                            <img
                                src="/images/pages/angel-tree-christmas/PFC-icons_13-green.png"
                                alt="partner camps"
                            />
                            <h3>4,902</h3>
                            <p>Angel Tree Children</p>
                        </div>
                        <div className="center">
                            <img
                                src="/images/pages/angel-tree-christmas/PFC-icons_gift-green.png"
                                alt="SPONSORS"
                            />
                            <h3>2009</h3>
                            <p>SPONSORS</p>
                        </div>
                        <div className="center">
                            <img
                                src="/images/pages/angel-tree-christmas/PFC-icons-church-green.png"
                                alt="SPONSOR CHURCHES"
                            />
                            <h3>117</h3>
                            <p>SPONSOR CHURCHES</p>
                        </div>
                        <div className="center">
                            <img
                                src="/images/pages/angel-tree-christmas/PFC-icons-lock-green.png"
                                alt="INSTITUTIONS REGISTERED"
                            />
                            <h3>108</h3>
                            <p>INSTITUTIONS REGISTERED</p>
                        </div>
                        <div className="center">
                            <img
                                src="/images/pages/angel-tree-christmas/PFC-icons-hands-green.png"
                                alt="NEW INSTITUTIONS"
                            />
                            <h3>6</h3>
                            <p>NEW INSTITUTIONS</p>
                        </div>
                        <div className="center">
                            <img
                                src="/images/pages/angel-tree-christmas/PFC-icons-man-green.png"
                                alt="FAMILIES INCLUDED"
                            />
                            <h3>2330+</h3>
                            <p>FAMILIES INCLUDED</p>
                        </div>
                    </div>
                    <div className="floating-image-container">
                        <h2>Angel Tree Kids Across Canada!</h2>
                        <img
                            src="/images/pages/angel-tree-christmas/cnada-map-only.png"
                            alt="Angel Tree Kids Across Canada!"
                        />
                        <img
                            src="/images/pages/angel-tree-christmas/GiftTag2-e1646760415590.png"
                            alt="merry christmas message"
                            className="floating-image"
                        />
                    </div>
                    <PfcBlock color="green">
                        <div className="center">
                            <p>
                                And may you have the power to understand, as all
                                God’s people should, how wide, how long, how
                                high, and how deep his love is.
                            </p>
                            <p>EPHESIANS 3:18</p>
                        </div>
                    </PfcBlock>
                </div>
            </div>
        </div>
    );
}
