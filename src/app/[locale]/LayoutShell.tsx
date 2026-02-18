"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  announcementBar: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  whatsApp: ReactNode;
};

export default function LayoutShell({
  children,
  announcementBar,
  header,
  footer,
  whatsApp,
}: Props) {
  const pathname = usePathname();
  // Homepage has its own nav/footer — hide the global ones
  const isHome = pathname === "/" || pathname === "/nl" || pathname === "/en";

  if (isHome) {
    return <main>{children}</main>;
  }

  return (
    <>
      {announcementBar}
      {header}
      <main>{children}</main>
      {footer}
      {whatsApp}
    </>
  );
}
