import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MainButton from "../buttons/MainButton";
import PfcButton from "../buttons/PfcButton";

export default function HeroCarousel() {
    const itemsSize = 2;
    const [items, setItems] = useState({
        items: ["shown", ""],
        currenItemIdx: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setItems((items) => {
                const newItems = [...items.items];

                newItems[items.currenItemIdx] = "";
                let newItemIdx = items.currenItemIdx + 1;
                if (newItemIdx === itemsSize) newItemIdx = 0;
                newItems[newItemIdx] = "shown";

                return { items: newItems, currenItemIdx: newItemIdx };
            });
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div id="hero-carousel-container">
            <div className={"single-carousel-item-container " + items.items[0]}>
                <div className="carousel-control left">
                    <FaChevronLeft />
                </div>
                <div className="carousel-control right">
                    <FaChevronRight />
                </div>
                <img src="/images/home/hero/item-1-kid.png" alt="angel tree" />
                <div className="single-carousel-inner">
                    <img
                        src="/images/home/hero/angel-tree.png"
                        alt="angel tree"
                    />
                    <h1>Give a Child an Adventure this Summer!</h1>
                    <p>
                        Help us send a prisoner’s child to an accredited
                        Christian day or overnight camp!
                    </p>
                    <MainButton color="orange" text="READ MORE" type="button" />
                </div>
            </div>
            <div className={"single-carousel-item-container " + items.items[1]}>
                <div className="carousel-control left">
                    <FaChevronLeft />
                </div>
                <div className="carousel-control right">
                    <FaChevronRight />
                </div>
                <img src="/images/home/hero/item-2-prison.jpg" alt="prisoner" />
                <div className="single-carousel-inner right no-image">
                    <h1>
                        Children from fatherless homes are 20 times more likely
                        to end up in prison.
                    </h1>
                    <p>What if you could help change that?</p>
                    <PfcButton color="orange" text="GIVE NOW" type="button" />
                </div>
            </div>
        </div>
    );
}
