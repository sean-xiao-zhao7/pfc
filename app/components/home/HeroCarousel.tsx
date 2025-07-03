import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PfcButton from "../buttons/PfcButton";
import { Link } from "react-router";

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
        }, 10000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const changeItemHandler = (direction: string) => {
        setItems((items) => {
            const newItems = [...items.items];

            newItems[items.currenItemIdx] = "";

            let newItemIdx;
            if (direction === "next") {
                newItemIdx = items.currenItemIdx + 1;
                if (newItemIdx === itemsSize) newItemIdx = 0;
            } else {
                newItemIdx = items.currenItemIdx - 1;
                if (newItemIdx === -1) newItemIdx = itemsSize - 1;
            }

            newItems[newItemIdx] = "shown";

            return { items: newItems, currenItemIdx: newItemIdx };
        });
    };

    return (
        <div id="hero-carousel-container">
            <div className={"single-carousel-item-container " + items.items[0]}>
                <div
                    className="carousel-control left"
                    onClick={() => changeItemHandler("prev")}
                >
                    <FaChevronLeft />
                </div>
                <div
                    className="carousel-control right"
                    onClick={() => changeItemHandler("next")}
                >
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
                    <Link to="/our-programs/in-community-programs/angel-tree/angel-tree-camping">
                        <PfcButton
                            color="orange"
                            text="READ MORE"
                            type="button"
                        />
                    </Link>
                </div>
            </div>
            <div className={"single-carousel-item-container " + items.items[1]}>
                <div
                    className="carousel-control left"
                    onClick={() => changeItemHandler("prev")}
                >
                    <FaChevronLeft />
                </div>
                <div
                    className="carousel-control right"
                    onClick={() => changeItemHandler("next")}
                >
                    <FaChevronRight />
                </div>
                <img src="/images/home/hero/item-2-prison.jpg" alt="prisoner" />
                <div className="single-carousel-inner right no-image">
                    <h1>
                        Children from fatherless homes are 20 times more likely
                        to end up in prison.
                    </h1>
                    <p>What if you could help change that?</p>
                    <a
                        href="https://give.prisonfellowship.ca/open-arms/"
                        target="_blank"
                        rel="noopener"
                    >
                        <PfcButton
                            color="orange"
                            text="GIVE NOW"
                            type="button"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
