import React from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header>
        <Link href="/">
          <p>home</p>
        </Link>
        <Link href="/admin">
          <p>admin</p>
        </Link>
        <Link href="/cool">
          <p>cool</p>
        </Link>
      </header>
      {children}
      <footer>
        <p>footer</p>
      </footer>
    </main>
  );
}
