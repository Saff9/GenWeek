import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
}

export default function Avatar({ src, alt = "User Avatar", size = 48 }: AvatarProps) {
  return (
    <div
      className="rounded-full overflow-hidden border border-gray-300"
      style={{ width: size, height: size }}
    >
      <Image
        src={src || "/images/default-avatar.png"}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
}
