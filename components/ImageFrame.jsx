import Image from "next/image";

export default function ImageFrame({
  src,
  alt,
  className = "",
  imageClassName = "",
  rounded = "rounded-[1.5rem]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}) {
  return (
    <div
      className={`relative overflow-hidden border border-white bg-[#f6ede9] ${rounded} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}
