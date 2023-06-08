import { Character } from "@/types/Character";
import { endpoint } from "@/utils/endpoint";

export async function getAllCharacters(): Promise<Character[]> {
  const res = await fetch(`${endpoint}/characters`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data.characters;
}
