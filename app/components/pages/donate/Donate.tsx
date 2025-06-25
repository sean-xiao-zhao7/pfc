import PFCLogo from "~/components/blocks/PFCLogo";
import MainButton from "~/components/buttons/MainButton";

export default function Donate() {
    return (
        <div className="page-container">
            <div className="slogan contain-text">
                <PFCLogo />
                <h1>Giving</h1>
                <p>
                    "One person gives freely, yet gains even more; another
                    withholds unduly, but comes to poverty."
                </p>
                <p>Proverbs 11:24</p>
            </div>
            <div className="body center">
                <p>
                    This ministry is made possible through your generous gifts.
                    We thank you for your continued support for Prison
                    Fellowship Canada.
                </p>
                <a
                    href="https://prisonfellowship.ca/donate-online/"
                    target="_blank"
                    rel="noopener"
                >
                    <MainButton text="Give Today" color="green" type="button" />
                </a>
            </div>
        </div>
    );
}
