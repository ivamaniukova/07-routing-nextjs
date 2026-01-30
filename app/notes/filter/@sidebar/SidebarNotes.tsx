import Link from 'next/link';
import css from './SidebarNotes.module.css';
import type { NoteTag } from '@/types/note';

type SidebarNotesProps = {
    tags: NoteTag[];
    onTagClick?: (tag: NoteTag | 'all') => void;
};

export default function SidebarNotes({ tags, onTagClick }: SidebarNotesProps) {
    const handleClick = (tag: NoteTag | 'all', e: React.MouseEvent) => {
        if (onTagClick) {
            onTagClick(tag);
        }
    };

    return (
        <ul className={css.menuList}>
            <li className={css.menuItem}>
                <Link
                    href="/notes/filter/all"
                    className={css.menuLink}
                    onClick={(e) => handleClick('all', e)}
                >
                    All notes
                </Link>
            </li>
            {tags.map((tag) => (
                <li key={tag} className={css.menuItem}>
                    <Link
                        href={`/notes/filter/${tag}`}
                        className={css.menuLink}
                        onClick={(e) => handleClick(tag, e)}
                    >
                        {tag}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

