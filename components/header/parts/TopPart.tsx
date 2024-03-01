import Image from "next/image";
import Link from "next/link";

export default function TopPart() {
  return (
    <div className="flex justify-center items-center w-[35px] h-[60px]">
      <Link href="/">
        <Image
          src="/clessidra.png"
          alt=""
          width={200}
          height={200}
          className="object-fill w-full h-full"
        />
      </Link>
    </div>
  );
}
