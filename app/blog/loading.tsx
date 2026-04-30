import Header from "@/components/Header";
import Footer from "@/components/Footer";

function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line/90 bg-ivory/40">
      <div className="aspect-[16/10] w-full animate-pulse bg-shell" />
      <div className="space-y-3 p-6">
        <div className="h-3 w-24 animate-pulse rounded bg-line" />
        <div className="h-8 w-4/5 max-w-md animate-pulse rounded bg-line" />
        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-line" />
          <div className="h-3 w-full animate-pulse rounded bg-line" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-line" />
        </div>
        <div className="h-3 w-32 animate-pulse rounded bg-line" />
      </div>
    </div>
  );
}

export default function BlogLoading() {
  return (
    <>
      <Header activeHref="/blog" />
      <main className="min-h-[60vh]">
        <section className="border-b border-line/80 bg-shell/30">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="h-3 w-20 animate-pulse rounded bg-line" />
            <div className="mt-4 h-12 w-2/3 max-w-lg animate-pulse rounded-lg bg-line sm:h-14" />
            <div className="mt-6 space-y-2">
              <div className="h-4 w-full max-w-xl animate-pulse rounded bg-line" />
              <div className="h-4 w-5/6 max-w-lg animate-pulse rounded bg-line" />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i}>
                <CardSkeleton />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
