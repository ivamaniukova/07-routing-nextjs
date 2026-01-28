import { notFound } from 'next/navigation';
import type { NoteTag } from '@/types/note';
import NotesClient from './Notes.client';

type Props = {
    params: Promise<{ slug: string[] }>;
};

export default async function FilterPage({ params }: Props) {
    const { slug } = await params;

    if (!slug || slug.length !== 1) notFound();

    const current = slug[0];
    const tagForApi = current === 'all' ? undefined : (current as NoteTag);

    return <NotesClient tag={tagForApi} />;
}
