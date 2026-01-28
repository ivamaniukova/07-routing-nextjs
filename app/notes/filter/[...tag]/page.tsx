import { notFound } from "next/navigation";
import type { NoteTag } from "@/types/note";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

type Props = {
    params: Promise<{ tag: string[] }>;
};

export default async function FilterPage({ params }: Props) {
    const { tag } = await params;
    if (tag.length !== 1) {
        notFound();
    }
    const currentTag = tag?.[0] ?? 'all';
    const tagForApi = currentTag === 'all' ? undefined : (currentTag as NoteTag);
    const data = await fetchNotes({ tag: tagForApi });
    return <NoteList notes={data.notes} />;
}
