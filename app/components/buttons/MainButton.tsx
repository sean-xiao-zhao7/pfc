export default function MainButton({
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
            className={`${color}-color-button main-button`}
            type={type === "submit" ? "submit" : "button"}
        >
            {text}
        </button>
    );
}
