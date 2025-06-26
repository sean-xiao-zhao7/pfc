export default function PFCInput({ placeholder }: { placeholder: string }) {
    return (
        <input
            type="text"
            placeholder={placeholder ? placeholder : ""}
            className="pfc-input text"
        />
    );
}
