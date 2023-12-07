"use client";

import React, { useEffect, useState } from "react";

import { redirect } from "next/navigation";

export default function ClientPage() {
  const [count, setCount] = useState(0);
   
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
