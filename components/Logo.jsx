import Image from "next/image";
import Link from "next/link";

import { SITE_LOGO_PATH } from "@/lib/constants/site";

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
      ? "h-10 w-auto max-h-11 object-contain object-left sm:h-11 sm:max-h-12 md:h-12 md:max-h-14"
      : "h-12 w-auto max-h-14 object-contain object-left sm:h-14 sm:max-h-16 md:h-16 md:max-h-20";

  return (
    <Link href="/" aria-label="Felinda Jewelry home" className="flex items-center">
      <Image
        src={SITE_LOGO_PATH}
        alt="Felinda Jewelry"
        width={320}
        height={100}
        priority={priority}
        className={`${sizeStyles} ${overlay ? "brightness-0 invert" : ""} ${className}`.trim()}
      />
    </Link>
  );
}
