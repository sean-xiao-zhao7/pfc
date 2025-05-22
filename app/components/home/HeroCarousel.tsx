import MainButton from "../buttons/MainButton";

export default function HeroCarousel() {
    return (
        <div id="hero-carousel-container">
            <div className="single-carousel-item-container">
                <img
                    src="/images/home/hero/item-1-kid.png"
                    alt="hero first image"
                />
                <div className="single-carousel-inner" id="carousel-angel-tree">
                    <img
                        src="/images/home/hero/angel-tree.png"
                        alt="angel tree"
                    />
                    <h1>Give a Child an Adventure this Summer!</h1>
                    <p>
                        Help us send a prisoner’s child to an accredited
                        Christian day or overnight camp!
                    </p>
                    <MainButton color="orange" text="READ MORE" />
                </div>
            </div>
        </div>
    );
}
