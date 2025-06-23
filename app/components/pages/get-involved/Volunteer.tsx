import PFCLogo from "~/components/blocks/PFCLogo";
import PfcBlock from "~/components/blocks/PfcBlock";
import SpaceDivider from "~/components/blocks/SpaceDivider";
import PfcButton from "~/components/buttons/PfcButton";

export default function Volunteer() {
    return (
        <div className="page-container" id="volunteer">
            <div className="slogan">
                <PFCLogo />
                <h1>Volunteer</h1>
            </div>
            <div className="body">
                <p>
                    PFC has volunteer opportunities that fit different skills
                    and schedules. PFC provides step-by-step instructions on
                    getting started. Volunteers for PFC by Phone, In-Prison
                    Ministry, or Bridgecare must be 25 years or older to apply.
                    In addition, PFC can provide private group training sessions
                    for churches with eight or more participants.
                </p>
                <p className="center">
                    We would love to have you join the PFC Volunteer team.
                </p>
                <SpaceDivider />
                <h2>
                    EXAMPLES OF HOW YOU MIGHT CONSIDER SERVING IN THIS MINISTRY
                </h2>
                <h3>SERVING INCARCERATED INDIVIDUALS</h3>
                <ul>
                    <li>
                        Join a PFC chapter of volunteers at a local federal or
                        provincial correctional institution. Depending on the
                        nature of PFC programming at the specific institution,
                        this may include:
                    </li>
                    <ul>
                        <li>
                            Facilitating or helping with group Bible studies.
                        </li>
                        <li>Engaging in one-on-one mentoring.</li>
                    </ul>
                    <li>
                        Join the PFC By Phone Volunteer team to provide
                        encouragement, conversation and prayer to prisoners.
                    </li>
                </ul>
                <h3>SERVING RELEASED CLIENTS (BRIDGECARE MINISTRY)</h3>
                <ul>
                    <li>
                        Support prisoners with spiritual mentorship upon
                        release.
                    </li>
                    <li>
                        Work within the local church and with community partners
                        to assist clients as they re-integrate.
                    </li>
                    <li>Help connect a former prisoner to a local church.</li>
                </ul>
                <h3>SERVING IN THE RESTORATIVE JUSTICE PROGRAM (VICTIMS)</h3>
                <ul>
                    <li>
                        As offender participants work through the steps of
                        taking active responsibility for their crimes, victims
                        of like crimes have an opportunity to share how their
                        lives were impacted. This circle dialogue can begin or
                        continue the process of healing and moving forward.
                    </li>
                </ul>
                <PfcBlock color="orange">
                    <div className="center">
                        <h2>
                            APPLY TODAY TO VOLUNTEER WITH PRISON FELLOWSHIP
                            CANADA
                        </h2>
                        <PfcButton text="APPLY TODAY" />
                    </div>
                </PfcBlock>
                <div className="two-cols">
                    <div className="box">
                        <img
                            src="/images/shared/angel-tree-gift.jpg"
                            alt="angel tree gift"
                        />
                    </div>
                    <div>
                        <h2>BECOME AN ANGEL TREE CHRISTMAS SPONSOR</h2>
                        <h2>ANGEL TREE CHRISTMAS SPONSORSHIP</h2>
                        <p>
                            There are over 357,000 children affected by parental
                            incarceration in Canada. These children often carry
                            the weight of shame and the stigmatization of their
                            peers. PFC’s Angel Tree Christmas program connects
                            church communities and individuals with the families
                            of prisoners through the delivery of a Christmas
                            gift on behalf of the incarcerated parent.
                        </p>
                        <PfcButton />
                    </div>
                </div>
                <SpaceDivider />
            </div>
        </div>
    );
}
