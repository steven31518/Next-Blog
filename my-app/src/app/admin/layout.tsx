import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header className="flex flex-row space-x-4">
        <Link href="/">
          <p>admin orders</p>
        </Link>
        <Link href="/cool">
          <p>admin products</p>
        </Link>
      </header>
      {children}
      <footer>XXX copyright 20203/12/5</footer>;
    </main>
  );
}
