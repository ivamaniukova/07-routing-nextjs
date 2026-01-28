'use client';

import { useQuery } from '@tanstack/react-query';
import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';
import type { NoteTag } from '@/types/note';

type Props = {
    tag?: NoteTag;
};

export default function NotesClient({ tag }: Props) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['notes', tag ?? 'all'],
        queryFn: () => fetchNotes({ tag }),
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError || !data)
        return (
            <p role="alert">
                Could not fetch the list of notes. Request failed.
            </p>
        );

    return <NoteList notes={data.notes} />;
}
