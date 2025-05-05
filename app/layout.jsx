
import '../styles/globals.css';

export const metadata = {
  title: 'Abdayem Group',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
