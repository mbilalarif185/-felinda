import Link from "next/link";

/**
 * @param {object} props
 * @param {boolean} [props.overlay] — header on dark hero: invert mark for contrast
 * @param {boolean} [props.priority] — LCP: true for header (default), false below the fold
 * @param {"default"|"footer"} [props.variant] — footer uses a slightly smaller lockup
 * @param {string} [props.className] — appended to the image
 */
export default function Logo({
  overlay = false,
  priority = true,
  variant = "default",
  className = "",
}) {
  const sizeStyles =
    variant === "footer"
      ? "text-2xl"
      : "text-3xl sm:text-4xl";

  const textColor = overlay ? "text-cream" : "text-ink";

  return (
    <Link href="/" aria-label="Auréa Jewellery home" className={`flex flex-col items-start ${className}`.trim()}>
      <span className={`auréa-serif leading-none tracking-tight ${sizeStyles} ${textColor}`}>
        Auréa
      </span>
      <span className={`text-[0.65em] font-medium tracking-[0.2em] uppercase mt-1 ${textColor}`}>
        Jewellery
      </span>
    </Link>
  );
}
