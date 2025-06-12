import React from "react";

export default function FullWidthContainer({
    backgroundImageName,
    children,
}: {
    backgroundImageName: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={
                "full-width-container background-image-" + backgroundImageName
            }
        >
            {children}
        </div>
    );
}
