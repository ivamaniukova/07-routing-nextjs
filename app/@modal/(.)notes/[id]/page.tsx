import { fetchNoteById } from '@/lib/api';
import NotePreviewClient from './NotePreviewClient';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function NoteModalPage({ params }: Props) {
    const { id } = await params;
    const note = await fetchNoteById(id);
    return <NotePreviewClient note={note} />;
}
