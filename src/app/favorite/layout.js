

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
