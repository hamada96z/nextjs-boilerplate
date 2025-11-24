// app/page.js oder app/page.tsx
const listings = [
  { id: 1, title: "هاتف سامسونغ مستعمل", price: "300,000 SYP", city: "دمشق" },
  { id: 2, title: "Wohnung in Berlin, 2 Zimmer", price: "850 €", city: "Berlin" },
  { id: 3, title: "Laptop Lenovo i5", price: "450 €", city: "Istanbul" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">كلّ شي • Kul-si</h1>
            <p className="text-sm text-gray-600">
              منصة إعلانات مبوبة لسوريا والشرق الأوسط
            </p>
          </div>
          <div className="flex gap-2 text-sm">
            <button className="px-2 py-1 rounded bg-gray-900 text-white">AR</button>
            <button className="px-2 py-1 rounded bg-gray-100">EN</button>
            <button className="px-2 py-1 rounded bg-gray-100">DE</button>
            <button className="px-2 py-1 rounded bg-gray-100">TR</button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">أحدث الإعلانات / Neueste Anzeigen</h2>
          <button className="px-3 py-1 rounded bg-emerald-600 text-white text-sm">
            + إعلان جديد / Neue Anzeige
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {listings.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm p-3 flex flex-col justify-between"
            >
              <div>
                <div className="font-medium mb-1">{item.title}</div>
                <div className="text-sm text-gray-600">{item.city}</div>
              </div>
              <div className="mt-2 text-right font-semibold">{item.price}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
