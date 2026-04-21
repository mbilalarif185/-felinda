import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="Felinda Jewelry — Home" className="flex items-center">
      <Image
        src="/images/logo.webp"
        alt="Felinda Jewelry"
        width={100}
        height={100}
        priority
        className="h-[100px] w-[100px]"
      />
    </Link>
  );
}
