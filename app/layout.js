import Navbar from '@/app/_components/Navbar';
import '@/app/_styles/global.css';
import { ReservationProvider } from '@/app/_components/ReservationContext';

import { Merriweather } from 'next/font/google';
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export const metadata = {
  title: {
    template: '%s / Bogor Cabin',
    default: 'Welcome / Bogor Cabin',
  },
  description:
    'Escape to tranquility in the heart of nature. Cozy cabins with breathtaking views, where mountains meet the lake. Your serene retreat awaits. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.className} bg-dark-300 text-primary-100 min-h-svh antialiased relative `}
        suppressHydrationWarning={true}
      >
        <main className="w-full">
          <ReservationProvider>{children}</ReservationProvider>
        </main>
        <Navbar />
      </body>
    </html>
  );
}
