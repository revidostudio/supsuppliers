import { COMPANY } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 ease-out"
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} fill="currentColor" />
    </a>
  );
}
