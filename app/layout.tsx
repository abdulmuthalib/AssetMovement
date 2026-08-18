import './globals.css';
import type { Metadata } from 'next';
import { Sidebar } from '@/app/components/sidebar';

export const metadata: Metadata = {
  title: 'Medical Asset Register MVP',
  description: 'Medical equipment asset movement register for member, staff, and admin workflows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="app-shell">
          <Sidebar />
          <main className="main-panel">{children}</main>
        </div>
      </body>
    </html>
  );
}
