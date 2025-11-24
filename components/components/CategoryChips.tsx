"use client";

import { CATEGORIES } from "../lib/dummyData";

export default function CategoryChips({ lang, activeId, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={
            "flex items-center gap-1 px-3 py-1 rounded-full border text-xs whitespace-nowrap " +
            (cat.id === activeId
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100")
          }
        >
          <span>{cat.icon}</span>
          <span>{cat.label[lang] || cat.label.en}</span>
        </button>
      ))}
    </div>
  );
}
