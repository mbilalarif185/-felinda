import { CONTACT } from "@/lib/contact";

function WhatsAppIcon({ size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M19.11 17.35c-.3-.15-1.77-.87-2.04-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.08-.78.38s-1 1-.98 2.42c.02 1.43 1.02 2.8 1.17 2.98.15.2 2 3.04 4.84 4.27 2.83 1.23 2.83.82 3.35.77.52-.05 1.67-.68 1.9-1.33.24-.66.24-1.22.16-1.34-.08-.12-.28-.2-.58-.35Z" />
      <path d="M16.03 3.2c-6.97 0-12.62 5.65-12.62 12.62 0 2.22.58 4.4 1.68 6.32L3.2 28.8l6.82-1.8c1.87 1.02 3.97 1.56 6.1 1.56h.01c6.97 0 12.62-5.65 12.62-12.62S23 3.2 16.03 3.2Zm0 23.24h-.01c-1.88 0-3.72-.5-5.33-1.45l-.38-.22-4.05 1.07 1.08-3.95-.25-.4a10.49 10.49 0 0 1-1.6-5.56c0-5.8 4.73-10.53 10.54-10.53 2.82 0 5.46 1.1 7.45 3.08a10.47 10.47 0 0 1 3.09 7.45c0 5.8-4.73 10.52-10.54 10.52Z" />
    </svg>
  );
}

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={CONTACT.whatsappWaMe}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[120] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#20bd5c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon />
    </a>
  );
}
