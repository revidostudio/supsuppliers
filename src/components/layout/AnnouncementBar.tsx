"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const locale = useLocale();
  const isNl = locale === "nl";
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#5BCEE0] text-[#0a0a0a] relative">
      <div className="container-site flex items-center justify-center py-2.5 px-8">
        <p className="text-xs sm:text-sm font-body font-medium tracking-wide text-center">
          {isNl ? (
            <>
              Ontvang <strong className="font-semibold">gratis</strong> onze
              brochure en ontdek alle voordelen!
            </>
          ) : (
            <>
              Receive our <strong className="font-semibold">free</strong>{" "}
              brochure and discover all the benefits!
            </>
          )}
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1 text-[#0a0a0a]/50 hover:text-[#0a0a0a] transition-colors duration-200"
          aria-label="Close announcement"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
