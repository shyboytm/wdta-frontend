import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const PODCASTS_QUERY = `*[_type == "podcast" && defined(slug.current)]|order(_createdAt desc)[0...12]{_id, title, slug, player, body}`;
const options = { next: { revalidate: 30 } };

export default async function Home() {
  const podcasts = await client.fetch<SanityDocument[]>(
    PODCASTS_QUERY,
    {},
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Podcasts</h1>
      <ul className="flex flex-col gap-y-8">
        {podcasts.map((podcast) => (
          <li className="hover:underline" key={podcast._id}>
            <Link href={`/${podcast.slug.current}`}>
              <h2 className="text-xl font-semibold">{podcast.title}</h2>
            </Link>
            {podcast.player && (
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: podcast.player }}
              />
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export const metadata = {
  title: "Podcasts",
};
