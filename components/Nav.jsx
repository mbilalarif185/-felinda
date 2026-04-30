import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/lib/navigation";

export default function Nav({ activeHref = "/" }) {
  return (
    <nav className="felinda-sans hidden items-center gap-8 text-sm text-[#5F5550] lg:flex">
      {navItems.map((item) => {
        // ── Parent with dropdown (not clickable) ──
        if (item.children?.length) {
          const childIsActive = item.children.some(
            (c) => c.href === activeHref
          );
          return (
            <div key={item.label} className="group relative">
              <span
                tabIndex={0}
                aria-haspopup="menu"
                className={`flex cursor-default items-center gap-1 outline-none transition focus-visible:ring-2 focus-visible:ring-gold/80 focus-visible:ring-offset-2 ${
                  childIsActive ? "text-ink" : "hover:text-ink"
                }`}
              >
                {item.label}
                <ChevronDown
                  size={13}
                  strokeWidth={1.6}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </span>

              {/* Dropdown panel — uses a small pt-3 buffer so the cursor can
                  travel between trigger and panel without losing hover */}
              <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul
                  role="menu"
                  className="min-w-[200px] overflow-hidden rounded-md border border-[#e9dfda] bg-white py-2 shadow-[0_12px_30px_rgba(120,90,80,0.12)]"
                >
                  {item.children.map((child) => {
                    const isActive = child.href === activeHref;
                    return (
                      <li key={child.label} role="none">
                        <Link
                          href={child.href}
                          role="menuitem"
                          className={`block px-5 py-2.5 text-sm transition ${
                            isActive
                              ? "bg-[#faf2ee] text-ink"
                              : "text-[#5F5550] hover:bg-[#faf6f3] hover:text-ink"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }

        // ── Regular link ──
        const isActive = item.href === activeHref;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={isActive ? "text-ink" : "transition hover:text-ink"}
          >
            {item.label}
          </Link>
        );
      })}
      <Link
        href="/contact"
        className="rounded-full bg-rose px-5 py-3 text-white shadow-sm transition hover:opacity-90"
      >
        Book Appointment
      </Link>
    </nav>
  );
}
