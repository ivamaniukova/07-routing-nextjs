'use client';

export default function Error({ error }: { error: Error }) {
    return (
        <p role="alert">
            Could not fetch the list of notes. {error.message}
        </p>
    );
}
