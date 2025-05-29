export default function PfcButton({
    color,
    text,
}: {
    color: string;
    text: string;
}) {
    return <button className={`pfc-button-${color} pfc-button`}>{text}</button>;
}
