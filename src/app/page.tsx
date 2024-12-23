import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-grow">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div className="group relative h-[150] w-full md:h-[500px]">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
            <div className="text-xl font-bold text-white">
              <p className="my-4 text-center">MEN</p>
              <button className="rounded-md border border-white px-4 py-2 font-semibold group-hover:bg-white group-hover:text-black">
                EXPLORE
              </button>
            </div>
          </div>
          <Image
            src="/home/women.webp"
            alt="dummy"
            width={2000}
            height={2000}
            className="h-full w-full object-cover brightness-50 transition-all duration-300 group-hover:brightness-[0.85]"
          />
        </div>
        <div className="group relative h-[150] w-full md:h-[500px]">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
            <div className="text-xl font-bold text-white">
              <p className="my-4 text-center">MEN</p>
              <button className="rounded-md border border-white px-4 py-2 font-semibold group-hover:bg-white group-hover:text-black">
                EXPLORE
              </button>
            </div>
          </div>
          <Image
            src="/home/men.webp"
            alt="dummy"
            width={2000}
            height={2000}
            className="h-full w-full object-cover brightness-50 transition-all duration-300 group-hover:brightness-[0.85]"
          />
        </div>
        <div className="h-[100px] w-full md:col-span-2 md:h-[160px]">
          <Image
            src="/home/accessories.webp"
            alt="dummy"
            width={2000}
            height={2000}
            className="h-full w-full object-cover brightness-50 transition-all duration-300 group-hover:brightness-[0.85]"
          />
        </div>
      </div>
    </div>
  );
}
