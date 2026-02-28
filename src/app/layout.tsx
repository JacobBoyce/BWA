import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Base Web App',
  description: 'A minimal Next.js starter app',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}