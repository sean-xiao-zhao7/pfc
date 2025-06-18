type Book = {
    title: string;
    intro: string;
    imgUrl: string;
};

const imgUrlBase = "/images/pages/resources/recommended-reading/";

export const books: Book[][] = [
    [
        {
            title: "Breathing Underwater – Richard Rohr",
            intro: "When we learn to identify our addiction, embrace our brokenness, and surrender to God, we begin to bring healing to ourselves and our world. Rohr shows how the gospel principles in the Twelve Steps can free anyone from any addiction – from an obvious dependence on alcohol or drugs to the more common but less visible addiction that we all have to sin.",
            imgUrl:
                imgUrlBase + "Breathing-Underwater-–-Richard-Rohr-195x300.jpg",
        },
        {
            title: "Addiction & Grace – Gerald G. May, M.D.",
            intro: "Drawing on his experience as a psychiatrist working with the chemically dependent, Mai details the various addictions we suffer and emphasizes how addiction represents a doomed attempt to assert complete control over our lives. This is compassionate and wise treatment of this important topic, offering a critical yet hopeful guide to a place of freedom based on contemplative spirituality. ",
            imgUrl: imgUrlBase + "Screen-Shot-2022-08-26-at-11.58.25-AM.png",
        },
        {
            title: "Addiction and Pastoral Care – Sonia E. Waters and John Swinton",
            intro: "Substance addictions present a unique set of challenges for pastoral care. In this book, Sonia Waters weaves together personal stories, research, and theological reflection to offer helpful tools for ministers, counsellors, chaplains, and anyone else called to care pastorally for those struggling with addiction. Waters uses the story of the Gerasene demoniac in Mark’s Gospel to reframe addiction as a “soul-sickness” that arises from a legion of individual and social vulnerabilities. She includes pastoral reflections on oppression, the War on Drugs, trauma, guilt, discipleship, and identity. The final chapters focus on practical-care skills that address the challenges of recovery, especially ambivalence and resistance to change.",
            imgUrl:
                imgUrlBase +
                "Addiction-and-Pastoral-Care-Sonia-E.-Waters-and-John-Swinton-200x300.jpg",
        },
    ],
    [
        {
            title: "Homeward – Life in the Year After Prison – Bruce Western",
            intro: "Quantitative and qualitative evidence-based research drives a better understanding of what works and what doesn’t in successful ex-offender community reintegration. This 2018 re-entry study was conducted in Boston, Massachusetts.",
            imgUrl:
                imgUrlBase + "HomewardLifeintheYearAfterPrisonBruceWestern.jpg",
        },
    ],
    [
        {
            title: "Boundaries – Dr. Henry Cloud and Dr. John Townsend",
            intro: "This book offers biblically-based answers to tough questions (E.g. Can I set limits and still be a loving person? What are legitimate boundaries? What if someone is upset or hurt by my boundaries?Aren’t boundaries selfish?). Through insights and stories, the authors demonstrate how to set healthy boundaries with our parents, spouses, children, friends, co-workers, and even ourselves.",
            imgUrl: imgUrlBase + "boundries-194x300.jpg",
        },
    ],
];
