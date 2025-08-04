// src/app/layout.js
import './global.css';

export const metadata = {
  title: 'wedding invite',
  description: 'A cute digital invite 💌',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}