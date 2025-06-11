import type { ReactNode } from "react";

export default function PfcBlock({
    color,
    children,
}: {
    color: string;
    children: ReactNode;
}) {
    return <div className={"pfc-block " + color}>{children}</div>;
}
