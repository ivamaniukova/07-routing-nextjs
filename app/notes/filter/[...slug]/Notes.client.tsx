'use client';

import NotesPage from '@/app/notes/NotesPage';
import type { NoteTag } from '@/types/note';

type Props = {
    tag?: NoteTag;
};

export default function NotesClient({ tag }: Props) {
    return <NotesPage tag={tag} />;
}
