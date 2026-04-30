import Image from "next/image";
import Link from "next/link";

import { SITE_LOGO_PATH } from "@/lib/constants/site";

/**
 * @param {object} props
 * @param {boolean} [props.overlay] — header on dark hero: invert mark for contrast
 */
export default function Logo({ overlay = false }) {
  return (
    <Link href="/" aria-label="Felinda Jewelry — Home" className="flex items-center">
      <Image
        src={SITE_LOGO_PATH}
        alt="Felinda Jewelry"
        width={320}
        height={100}
        priority
        className={`h-14 w-auto max-h-16 object-contain object-left md:h-16 md:max-h-20 ${
          overlay ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
