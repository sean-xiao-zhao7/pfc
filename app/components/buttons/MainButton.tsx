export default function MainButton({
    color,
    text,
}: {
    color: string;
    text: string;
}) {
    return (
        <button className={`${color}-color-button main-button`} type="button">
            {text}
        </button>
    );
}
