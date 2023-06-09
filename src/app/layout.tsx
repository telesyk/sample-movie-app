import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-custom-grey-800 text-custom-light">
        <Navbar />
        <main className="px-4 py-8">
          <div className="mx-auto max-w-screen-xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
