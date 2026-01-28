import NotesPage from "./NotesPage";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";

export default async function Page() {
  const queryClient = new QueryClient();

  const page = 1;
  const search = '';

  await queryClient.prefetchQuery({
    queryKey: ["notes", { page, search }],
    queryFn: () => fetchNotes({ page, search }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesPage initialPage={page} initialSearch={search} />
    </HydrationBoundary>
  );
}