import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold">My Next.js Blog</h1>
      <div className="mt-4 flex flex-col gap-4">
        <Image src="/land.jpg" alt="blog" width="700" height="500"></Image>
        <Image src="/star.jpg" alt="blog" width="700" height="500"></Image>
      </div>
    </div>
  );
}
