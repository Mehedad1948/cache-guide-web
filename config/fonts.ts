import {
  Fira_Code as FontMono,
  Montserrat
} from 'next/font/google';

export const fontSans = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});
