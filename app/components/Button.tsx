"use client";

import { useMediaQuery } from "usehooks-ts";

export default function Button({ onClick }: { onClick: () => void }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <button
      type="button"
      className={`bg-green-400 text-white px-4 py-2 rounded ${
        isMobile ? "rotate-90" : "rotate-0"
      } animate-pulse`}
      onClick={onClick}
    >
      Cchorfah Click Me
    </button>
  );
}
