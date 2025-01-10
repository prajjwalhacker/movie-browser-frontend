
import '../styles/_global.scss';
import '../styles/movie-listing.scss';
import '../styles/hero.scss';
import '../styles/main.scss';
import '../styles/movie-card.scss';
import Hero from './_components/Hero';

export const metadata = {
  title: 'Movie browser',
  description: "Browse movies and save your favorite movies"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
         <Hero/>
        {children}
      </body>
    </html>
  );
}
