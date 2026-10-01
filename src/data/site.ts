export const SITE = {
  name: 'Dirt & Dollars',
  url: 'https://thedirtanddollarswebsite.com',
  tagline: 'Money, explained with dirt, cattle and fence posts.',
  description:
    'Ranch-plain personal finance. Compound interest, fees, savings and debt explained as stories you will remember — free weekly newsletter and YouTube videos with sources.',
  youtube: 'https://www.youtube.com/@dirtanddollars',
  author: 'Andres',
  ogImage: '/og-ten-cows.jpg',
  kitFormId: import.meta.env.PUBLIC_KIT_FORM_ID ?? '',
};

export type Post = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  date: string; // ISO
  videoId?: string;
  status: 'published' | 'upcoming';
};

export const POSTS: Post[] = [
  {
    slug: 'keep-the-heifers',
    number: 1,
    title: 'Keep the heifers: compound interest, explained with ten cows',
    summary: 'Why the first dollar you leave alone is worth more than the last one you add.',
    date: '2026-09-29',
    videoId: 'g4j_aHZDlfQ',
    status: 'published',
  },
  {
    slug: 'bank-pays-037-charges-22',
    number: 2,
    title: 'Why the bank pays you 0.37% and charges the guy next door 22%',
    summary: 'Coming next week.',
    date: '2026-10-06',
    status: 'upcoming',
  },
];
