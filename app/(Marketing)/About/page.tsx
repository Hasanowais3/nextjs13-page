import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>About</h1>
      <Link href={"/"}>Home</Link>
      <Image src="/picture.png" alt="image" width="100" height="100" />
    </>
  );
}
