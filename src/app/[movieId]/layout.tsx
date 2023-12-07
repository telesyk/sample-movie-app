import Navbar from '@/components/Navbar';
import '../globals.css';

export const metadata = {
  title: 'Movie page',
  description: 'Generated by create next app',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
}

export default RootLayout;
