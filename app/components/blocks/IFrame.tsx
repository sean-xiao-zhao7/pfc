export default function IFrame({
    url,
    className,
}: {
    url: string;
    className: string;
}) {
    return (
        <iframe
            src={url}
            title="PFC Bridgecare (2023)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={className}
        ></iframe>
    );
}
