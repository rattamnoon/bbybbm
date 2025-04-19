"use client";

import Button from "@/app/components/Button";
import FloatingHearts from "@/app/components/FloatingHearts";
import Loves from "@/app/components/Loves";
import { Suspense, useState } from "react";

export default function Home() {
  const [isLoving, setIsLoving] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-[#171717] flex flex-col gap-4 items-center justify-center min-h-screen">
        {isLoving ? <Loves /> : <Button onClick={() => setIsLoving(true)} />}
        <FloatingHearts />
      </div>
    </Suspense>
  );
}
