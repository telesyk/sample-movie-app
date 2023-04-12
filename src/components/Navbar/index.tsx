import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="bg-custom-grey-600">
      <div className="mx-auto max-w-screen-xl">
        <nav className="py-4 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/movies">Movies</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
