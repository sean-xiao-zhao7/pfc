import SpaceDivider from "~/components/blocks/SpaceDivider";
import MainButton from "~/components/buttons/MainButton";

export default function ChurchResources() {
    return (
        <div className="page-container" id="church-resources">
            <div className="slogan">
                <h1>Church Resources</h1>
            </div>
            <div className="body">
                <h2>Password Protected</h2>
                <p>To view this protected post, enter the password below:</p>
                <input type="text" className="full-width" />
                <SpaceDivider />
                <MainButton text="Submit" type="button" color="blue" />
                <SpaceDivider />
            </div>
        </div>
    );
}
