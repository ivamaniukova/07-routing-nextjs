'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import type { Note } from '@/types/note';

type Props = {
    note: Note;
};

export default function NotePreviewClient({ note }: Props) {
    const router = useRouter();

    return (
        <Modal
            isOpen
            onClose={() => router.back()}
            titleId="note-title"
            descriptionId="note-desc"
        >
            <NotePreview note={note} />
        </Modal>
    );
}
