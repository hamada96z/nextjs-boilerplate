"use client";

import Navbar from "../components/Navbar";
import CategoryChips from "../components/CategoryChips";
import ListingCard from "../components/ListingCard";
import { getText } from "../lib/texts";
import { LISTINGS } from "../lib/dummyData";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";

export default function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const langParam = searchParams.get("lang") || "ar";
  const { lang, t } = getText(langParam);
  const q = searchParams.get("q") || "";
  const cat = searchParams.get("cat") || "all";

  const filtered = useMemo(() => {
    return LISTINGS.filter((item) => {
      if (cat !== "all" && item.category !== cat) return false;
      if (!q.trim()) return true;
      const text = `${item.title_ar} ${item.title_en} ${item.city} ${item.city_en}`.toLowerCase();
      return text.includes(q.toLowerCase());
    });
  }, [q, cat]);

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div
      className="font-sans"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {t.brand} • {t.latestListings}
              </h1>
              <p className="text-sm text-slate-200">{t.tagline}</p>
            </div>
            <div className="w-full md:w-72">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={q}
                onChange={(e) => updateParam("q", e.target.value)}
                className="w-full rounded-full px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>
        </section>

        {/* Kategorien */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-700">{t.categories}</h2>
          </div>
         <CategoryChips
  lang={lang}
  activeId={cat}
  onChange={(newCat: string) => updateParam("cat", newCat)}
/>

        </section>

        {/* Listings */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-700">{t.latestListings}</h2>
          {filtered.length === 0 ? (
            <div className="text-sm text-gray-500">
              Keine passenden Anzeigen gefunden. (Später kommen echte Daten.)
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map((item) => (
                <ListingCard key={item.id} item={item} lang={lang} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
