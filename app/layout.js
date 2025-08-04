// src/app/layout.js
import './global.css';
import { Newsreader } from 'next/font/google';

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'], // Choose the weights you want
});

export const metadata = {
  title: 'our wedding',
  description: 'you are invited',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={newsreader.className}>
      <body>
        <div className="main-wrapper">
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}