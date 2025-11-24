export default function ListingCard({ item, lang }: { item: any; lang: string }) {
  const title = lang === "ar" ? item.title_ar : item.title_en || item.title_ar;
  const city = lang === "ar" ? item.city : item.city_en || item.city;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="h-32 bg-gradient-to-br from-slate-200 to-slate-300" />
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-sm font-semibold line-clamp-2">{title}</div>
          <div className="text-xs text-gray-500 mt-1">{city}</div>
        </div>
        <div className="mt-2 text-sm font-bold text-emerald-700">
          {item.price > 0 ? `${item.price} ${item.currency}` : "—"}
        </div>
      </div>
    </div>
  );
}
