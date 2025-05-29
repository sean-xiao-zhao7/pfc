export default function PfcButton({
    color,
    text,
    type,
}: {
    color: string;
    text: string;
    type: string;
}) {
    return (
        <button
            className={`pfc-button-${color} pfc-button`}
            type={type === "submit" ? "submit" : "button"}
        >
            {text}
        </button>
    );
}
