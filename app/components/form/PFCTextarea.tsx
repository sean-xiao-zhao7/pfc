export default function PFCTextarea({ placeholder }: { placeholder: string }) {
    return (
        <textarea
            placeholder={placeholder ? placeholder : ""}
            className="pfc-input textarea"
        />
    );
}
