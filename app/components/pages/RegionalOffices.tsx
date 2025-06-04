export default function RegionalOffices() {
    return (
        <div className="page-container" id="who-we-are">
            <div className="slogan">
                <img
                    src="/images/home/cropped-favicon.png"
                    alt="PFC logo"
                    className="pfc-logo"
                />
                <h1>Our Regions</h1>
            </div>
            <div className="body">
                <p>
                    Prison Fellowship Canada offers programs nationally to
                    various institutions throughout Canada. Check out what’s
                    happening in each of our regions below.
                </p>
                <div className="three-col-boxes-container">
                    <div className="col">
                        <div className="box">
                            <h3>BC/Northern Canada</h3>
                            <img
                                src="/images/pages/regional-offices/bc.jpg"
                                alt="BC region"
                            />
                        </div>
                        <div className="box">
                            <h3>Alberta</h3>
                            <img
                                src="/images/pages/regional-offices/alberta.jpg"
                                alt="Alberta region"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <h3>The Prairies</h3>
                            <img
                                src="/images/pages/regional-offices/the-prairies.jpg"
                                alt="The prairies region"
                            />
                        </div>
                        <div className="box">
                            <h3>Ontario</h3>
                            <img
                                src="/images/pages/regional-offices/ontario.jpg"
                                alt="Ontario region"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <h3>Atlantic Canada</h3>
                            <img
                                src="/images/pages/regional-offices/atlantic_canada.jpeg"
                                alt="Atlantic Canada region"
                            />
                        </div>
                        <div className="box">
                            <h3>Québec</h3>
                            <img
                                src="/images/pages/regional-offices/quebec.jpeg"
                                alt="Québec region"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
