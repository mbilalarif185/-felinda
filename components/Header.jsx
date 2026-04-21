import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

export default function Header({ activeHref = "/", overlay = false }) {
  const positioning = overlay
    ? "fixed top-0 left-0 right-0 z-50"
    : "sticky top-0 z-50";
  const tone = overlay
    ? "bg-transparent text-white"
    : "bg-cream/85 backdrop-blur border-b border-line/80 text-ink";

  return (
    <header className={`${positioning} ${tone} transition-colors duration-500`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Logo overlay={overlay} />
        <Nav activeHref={activeHref} overlay={overlay} />
        <MobileMenu activeHref={activeHref} overlay={overlay} />
      </div>
    </header>
  );
}
