"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LANGS, getText } from "../lib/texts";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLangFromUrl = searchParams.get("lang") || "ar";
  const { lang, t } = getText(currentLangFromUrl);

  function changeLang(newLang) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-extrabold tracking-tight">
            {t.brand}
          </span>
          <span className="text-xs text-gray-600">{t.tagline}</span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <button className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
            {t.newListing}
          </button>
          <div className="flex gap-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => changeLang(l)}
                className={
                  "px-2 py-1 rounded-full text-xs font-medium " +
                  (l === lang
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200")
                }
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
