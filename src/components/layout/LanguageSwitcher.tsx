"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "nl" ? "en" : "nl";
  const label = locale === "nl" ? "EN" : "NL";

  function handleSwitch() {
    router.replace(
      { pathname },
      { locale: otherLocale }
    );
  }

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center gap-1.5 text-xs font-body font-medium border border-[#e5e7eb] px-3 py-1.5 rounded-md text-[#6b7280] hover:border-[#5BCEE0] hover:text-[#5BCEE0] transition-colors duration-200"
      aria-label={`Switch to ${otherLocale === "nl" ? "Dutch" : "English"}`}
    >
      <Globe size={13} />
      {label}
    </button>
  );
}
