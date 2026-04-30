import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPostLoading() {
  return (
    <>
      <Header activeHref="/blog" />
      <main>
        <div className="border-b border-line/80 bg-shell/20">
          <div className="mx-auto max-w-3xl px-6 pb-12 pt-10 lg:px-10 lg:pt-14">
            <div className="h-4 w-36 animate-pulse rounded bg-line" />
            <div className="mt-10 space-y-3">
              <div className="h-3 w-48 animate-pulse rounded bg-line" />
              <div className="h-12 w-full animate-pulse rounded-lg bg-line sm:h-14" />
              <div className="h-4 w-full max-w-xl animate-pulse rounded bg-line" />
              <div className="h-4 w-5/6 max-w-lg animate-pulse rounded bg-line" />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="relative -mt-6 aspect-[21/9] w-full animate-pulse rounded-2xl bg-line sm:aspect-[2/1]" />
        </div>
        <div className="mx-auto max-w-3xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="h-28 animate-pulse rounded-2xl bg-line/80" />
          <div className="mt-14 space-y-4">
            <div className="h-4 w-full animate-pulse rounded bg-line" />
            <div className="h-4 w-full animate-pulse rounded bg-line" />
            <div className="h-4 w-11/12 animate-pulse rounded bg-line" />
            <div className="h-4 w-full animate-pulse rounded bg-line" />
            <div className="h-4 w-4/5 animate-pulse rounded bg-line" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
