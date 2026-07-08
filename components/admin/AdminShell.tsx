"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

type AdminShellProps = {
  children: ReactNode;
  title?: string;
};

export default function AdminShell({ children, title }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#f6f4f0] text-ink">
      <header className="border-b border-line/80 bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-luxe text-muted">
              Auréa CMS
            </p>
            <h1 className="font-serif text-xl text-ink">{title ?? "Blog admin"}</h1>
          </div>
          <nav className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Link
              href="/admin"
              className={`rounded-full px-3 py-1.5 font-sans text-sm transition ${
                pathname === "/admin" ? "bg-ink text-cream" : "text-muted hover:text-ink"
              }`}
            >
              Posts
            </Link>
            <Link
              href="/admin/posts/new"
              className={`rounded-full px-3 py-1.5 font-sans text-sm transition ${
                pathname === "/admin/posts/new" ? "bg-ink text-cream" : "text-muted hover:text-ink"
              }`}
            >
              New post
            </Link>
            <Link
              href="/blog"
              className="rounded-full px-3 py-1.5 font-sans text-sm text-muted transition hover:text-ink"
              target="_blank"
            >
              View blog
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-line px-3 py-1.5 font-sans text-sm text-ink transition hover:border-clay/50"
            >
              Log out
            </button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
    </div>
  );
}
