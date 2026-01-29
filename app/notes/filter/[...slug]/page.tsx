import { notFound } from 'next/navigation';
import type { NoteTag } from '@/types/note';
import NotesPage from '@/app/notes/NotesPage';
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from './Notes.client';

type Props = {
    params: Promise<{ slug: string[] }>;
};

export default async function FilterPage({ params }: Props) {
    const { slug } = await params;

    if (!slug || slug.length !== 1) notFound();

    const current = slug[0];

    const tagForApi = current === 'all' ? undefined : (current as NoteTag);

    const queryClient = new QueryClient();
    const page = 1;
    const search = '';

    await queryClient.prefetchQuery({
        queryKey: ["notes", { page, search, tag: tagForApi }],
        queryFn: () => fetchNotes({ page, search, tag: tagForApi }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient tag={tagForApi} />
        </HydrationBoundary>
    );
}
