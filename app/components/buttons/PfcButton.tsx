export default function PfcButton({
    color,
    text,
    type,
}: {
    color: string;
    text: string;
    type: string;
}) {
    if (!color) color = "black";
    if (!text) text = "Learn more";
    if (!type) type = "button";

    return (
        <button
            className={`pfc-button-${color} pfc-button`}
            type={type === "submit" ? "submit" : "button"}
        >
            {text}
        </button>
    );
}
