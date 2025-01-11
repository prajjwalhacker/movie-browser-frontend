
import '../../styles/favorite.scss';
import '../../styles/movie-card.scss';

export const metadata = {
  title: 'Favorite Movie',
  description: "your favorite movies"
}

export default function RootLayout({ children }) {
  return (
      <div>
        {children}
      </div>
  );
}
