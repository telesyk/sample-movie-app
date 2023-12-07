import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="px-4 bg-zinc-900">
      <div className="mx-auto max-w-screen-md">
        <nav className="py-4 flex justify-center gap-4">
          <Link href="/">Home</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
