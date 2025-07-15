import SpaceDivider from "~/components/blocks/SpaceDivider";

export default function OurBoard() {
    return (
        <div className="page-container" id="our-board">
            <div className="slogan">
                <img
                    src="/images/home/cropped-favicon.png"
                    alt="PFC logo"
                    className="pfc-logo"
                />
                <h1>Our Board of Directors</h1>
            </div>
            <div className="body">
                <p className="less-margin page-intro">
                    The PFC Board of Directors consists of passionate
                    individuals with diverse skills and backgrounds, who are
                    eager to serve the ministry with sincerity.
                </p>
            </div>
            <div>
                <div className="five-cols">
                    <div className="box">
                        <img
                            src="/images/pages/our_board/DAVE_HUTCHINSON.jpg"
                            alt="PFC board member"
                        />
                        <div className="hover-contents">
                            <h2>David Hutchinson</h2>
                            <p>President & CEO</p>
                            <p>1.844.618.5867</p>
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/our_board/sally_schroeder.jpg"
                            alt="PFC board member"
                        />
                        <div className="hover-contents">
                            <h2>Sally Schroeder</h2>
                            <p>President & CEO</p>
                            <p>1.844.618.5867</p>
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/our_board/Diane_Rundall.jpg"
                            alt="PFC board member"
                        />
                        <div className="hover-contents">
                            <h2>Diane Rundall</h2>
                            <p>President & CEO</p>
                            <p>1.844.618.5867</p>
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/our_board/Caroline_Riseboro.jpg"
                            alt="PFC board member"
                        />
                        <div className="hover-contents">
                            <h2>Caroline Riseboro</h2>
                            <p>President & CEO</p>
                            <p>1.844.618.5867</p>
                        </div>
                    </div>
                    <div className="box">
                        <img
                            src="/images/pages/our_board/Ruben_Jurik.jpg"
                            alt="PFC board member"
                        />
                        <div className="hover-contents">
                            <h2>Ruben Jurik</h2>
                            <p>President & CEO</p>
                            <p>1.844.618.5867</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
