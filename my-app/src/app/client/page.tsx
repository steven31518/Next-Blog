"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ClientPage() {
  useEffect(() => {}, []);
  return (
    <div>
      <h1>page</h1>
      <button
        className="rounded-lg border-2"
        onClick={() => {
          redirect("/admin");
        }}
      >
        admin
      </button>
    </div>
  );
}
