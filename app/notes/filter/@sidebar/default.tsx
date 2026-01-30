'use client';

import { useState, useEffect } from 'react';
import SidebarNotes from './SidebarNotes';
import type { NoteTag } from '@/types/note';

export default function Default() {
    const [tags, setTags] = useState<NoteTag[]>([]);
    const [activeTag, setActiveTag] = useState<NoteTag | 'all'>('all');

    useEffect(() => {
        const fetchedTags: NoteTag[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];
        setTags(fetchedTags);

        const path = window.location.pathname;
        const match = path.match(/\/notes\/filter\/(.+)/);
        if (match && match[1] !== 'all') {
            setActiveTag(match[1] as NoteTag);
        }
    }, []);
    const handleTagClick = (tag: NoteTag | 'all') => {
        console.log(`Tag clicked: ${tag}`);
        setActiveTag(tag);

        if (typeof window !== 'undefined') {
            localStorage.setItem('lastSelectedTag', tag);
        }
    };

    return (
        <div>
            <SidebarNotes
                tags={tags}
                onTagClick={handleTagClick}
            />
        </div>
    );
}
