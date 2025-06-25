export default function ExternalNewWindowLink({
    href,
    text,
}: {
    href: string;
    text: string;
}) {
    return (
        <a href={href} target="_blank" rel="noopener">
            {text}
        </a>
    );
}
