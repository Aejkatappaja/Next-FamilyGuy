import { Container } from "@/components/Container";
import { endpoint } from "@/utils/endpoint";
import Link from "next/link";
import Image from "next/image";

interface Character {
  id: number;
  name: string;
  slug: string;
  avatar: string;
}

async function getAllCharacters(): Promise<Character[]> {
  const res = await fetch(`${endpoint}/characters`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data.characters;
}

export default async function Page() {
  const data = await getAllCharacters();

  return (
    <main>
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((item: Character) => {
          return (
            <Link
              href={`/characters/${item.slug}`}
              key={item.name}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={item.avatar}
                alt=""
                className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
                width={500}
                height={500}
              />
            </Link>
          );
        })}
      </Container>
    </main>
  );
}
