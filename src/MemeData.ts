import { MemeCardData } from "./MemeCard";

export const memeData: MemeCardData[] = [
  {
    id: 1,
    imageUrl: getImageUrl(1),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 2,
    imageUrl: getImageUrl(2),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 3,
    imageUrl: getImageUrl(3),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 4,
    imageUrl: getImageUrl(4),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 5,
    imageUrl: getImageUrl(5),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 6,
    imageUrl: getImageUrl(6),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 7,
    imageUrl: getImageUrl(7),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 8,
    imageUrl: getImageUrl(8),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 9,
    imageUrl: getImageUrl(9),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 10,
    imageUrl: getImageUrl(10),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 11,
    imageUrl: getImageUrl(11),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
  {
    id: 12,
    imageUrl: getImageUrl(12),
    description: `Cool description of meme`,
    title: `Cool title of meme`,
  },
];

function getImageUrl(id: number): string {
  return `/src/assets/meme${id}.jpeg`;
}
