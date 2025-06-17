export default function IFrame({ url }: { url: string }) {
    return (
        <iframe
            src={url}
            title="PFC Bridgecare (2023)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        ></iframe>
    );
}
