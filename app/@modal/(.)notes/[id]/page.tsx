import { fetchNoteById } from '@/lib/api';
import NoteModalClient from './NoteModalClient';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function NoteModalPage({ params }: Props) {
    const { id } = await params;
    const note = await fetchNoteById(id);
    return <NoteModalClient note={note} />;
}
