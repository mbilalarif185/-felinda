"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin";
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.message ?? "Login failed.");
      return;
    }
    router.push(next);
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6f4f0] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-2xl border border-line bg-ivory/80 p-8 shadow-sm"
      >
        <div>
          <p className="font-sans text-xs font-medium uppercase tracking-luxe text-muted">Auréa CMS</p>
          <h1 className="mt-2 font-serif text-3xl text-ink">Sign in</h1>
          <p className="mt-2 font-sans text-sm text-muted">Blog management for authorized staff only.</p>
        </div>
        {error ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-800">
            {error}
          </p>
        ) : null}
        <label className="block space-y-2">
          <span className="font-sans text-sm font-medium text-ink">Password</span>
          <input
            type="password"
            autoComplete="current-password"
            className="w-full rounded-xl border border-line bg-white px-4 py-3 font-sans text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-ink py-3 font-sans text-sm font-medium text-cream transition hover:bg-noir disabled:opacity-50"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f6f4f0]" />}>
      <LoginForm />
    </Suspense>
  );
}
