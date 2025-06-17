import IFrame from "~/components/blocks/IFrame";
import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function AngelTreeCamping() {
    return (
        <div className="page-container" id="angel-tree-camping">
            <div className="center simple-slogan">
                <img
                    src="/images/pages/angel-tree-camping/ATC-BannerEN_2023-2048x559.jpg"
                    alt="Angel Tree Camping"
                />
            </div>
            <div className="body">
                <div className="two-cols">
                    <div className="box button-bottom-right">
                        <p>
                            PFC’s Angel Tree Camping program connects church
                            communities and individuals with the families of
                            prisoners through a Summer Camp experience. Children
                            get the opportunity to step outside of their home
                            situation and into a camp environment full of
                            adventure and fun. It also provides them with the
                            opportunity to hear the good news of Jesus Christ
                            and the difference He can make in their lives.
                        </p>
                        <PfcButton
                            color="green"
                            text="Donate Now"
                            type="button"
                        />
                    </div>
                    <IFrame
                        url={"https://www.youtube.com/embed/GpMoAmLx110"}
                        className=""
                    />
                </div>
                <SpaceDivider />
                <div className="three-cols">
                    <img
                        src="/images/pages/angel-tree-camping/WEB-IMAGES-2_Page_25-980x700.jpg"
                        alt="angel tree camping 1"
                    />
                    <img
                        src="/images/pages/angel-tree-camping/Annual-Report-2021-Images-File-1_Page_15-2048x1366.jpg"
                        alt="angel tree camping 2"
                    />
                    <p>
                        A gift of $300 provides a Christian camp “bursary” or
                        placement for kids to experience the freedom to try new
                        things, the joy of making friends, and the comfort of
                        knowing the deep love God has for them. This year, we’re
                        praying that more children than ever will experience
                        camp as Angel Tree kids, whether in person or virtually.
                    </p>
                </div>
                <PfcBlock color="black">
                    <div className="center">
                        <h2 className="cursive">Testimonies</h2>
                        <p>
                            “You have no idea how happy this makes them. It is a
                            huge blessing for them. We are grateful beyond
                            words. Thank you for the love you have for all these
                            children and their parents.”
                        </p>
                        <p>– An Angel Tree Caregiver</p>
                    </div>
                </PfcBlock>
                <div className="center">
                    <PfcButton text="Donate Now" color="green" type="button" />
                </div>
                <SpaceDivider />
                <div className="two-cols">
                    <img
                        src="/images/pages/angel-tree-camping/WEB-IMAGES-2_Page_24-980x702.jpg"
                        alt="campfire"
                    />
                    <div>
                        <p>
                            If you are a caregiver and are interested in having
                            a child participate in Angel Tree Camping, please
                            encourage their incarcerated parent to speak with
                            their Chaplain and request an application. Or
                            contact us directly at 1- 844-618-5867.
                        </p>
                        <p>
                            Funding is limited and available on a first-come,
                            first-served basis to only those who successfully
                            qualify for the program. For any child who is
                            approved for sponsorship through Angel Tree Camping,
                            Prison Fellowship Canada regional staff or
                            volunteers will work with the child’s caregiver to
                            help connect the family with a local Christian camp
                            in their area and facilitate the child’s camp
                            registration.
                        </p>
                    </div>
                </div>
                <div>
                    <h2>LAST YEAR’S PROGRAM IMPACT</h2>
                    <div className="three-cols">
                        <div className="center">
                            <img
                                src="/images/pages/angel-tree-camping/PFC-icon-camps.png"
                                alt="camp fire"
                            />
                            <h3>55</h3>
                            <p>PARTNER CAMPS</p>
                        </div>
                        <div className="center">
                            <img
                                src="/images/pages/angel-tree-camping/PFC-icons_13-green.png"
                                alt="camp kid"
                            />
                            <h3>100</h3>
                            <p>CHILDREN PARTICIPATED</p>
                        </div>
                        <div className="center">
                            <img
                                src="/images/pages/angel-tree-camping/PFC-icons-lock-green.png"
                                alt="camp lock"
                            />
                            <h3>50</h3>
                            <p>INSTITUTIONS PARTICIPATED</p>
                        </div>
                    </div>
                    <PfcBlock color="green">
                        <div className="center">
                            <p>
                                Jesus said, “Let the little children come to me,
                                and do not hinder them, for the kingdom of
                                heaven belongs to such as these.”
                            </p>
                            <p>MATTHEW 19:14</p>
                        </div>
                    </PfcBlock>
                </div>
            </div>
        </div>
    );
}
