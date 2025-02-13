
import '../styles/_global.scss';
import '../styles/movie-listing.scss';
import '../styles/hero.scss';
import '../styles/main.scss';
import '../styles/movie-card.scss';
import '../styles/_loader.scss';
import '../styles/_search.scss';
import '../styles/filters.scss';
import '../styles/infinite-scroll-loader.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
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
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
