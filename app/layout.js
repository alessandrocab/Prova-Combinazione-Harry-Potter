import './globals.css';

export const metadata = {
  title: 'Secret Combination',
  description: 'Scopri il luogo segreto.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
