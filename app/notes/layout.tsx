export type LayoutNotesProps = {
    children: React.ReactNode;
    modal: React.ReactNode;
};

export default function LayoutNotes({ children, modal }: LayoutNotesProps) {
    return (
        <div>
            {children}
            {modal}
        </div>
    );
}