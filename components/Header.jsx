import Navbar from "@/components/luxe/sections/Navbar";

/**
 * Site header. Unified with the homepage: every page now shares the same
 * luxe fixed navbar (transparent on top, blur on scroll). The legacy
 * `activeHref` / `overlay` props are accepted for backwards compatibility
 * but no longer needed — the navbar handles its own state.
 */
export default function Header(props) {
  // `props` (activeHref / overlay) accepted for backwards compatibility, unused.
  void props;
  return <Navbar />;
}
