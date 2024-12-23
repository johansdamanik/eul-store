import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-grow">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div className="group relative h-[150] w-full md:h-[500px]">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2 text-xl font-bold text-white">
              <p className="text-center text-xl tracking-[0.5rem] md:text-4xl">
                WOMEN
              </p>
              <button className="rounded-md border border-white px-8 py-2 text-sm font-semibold group-hover:bg-white group-hover:text-black md:text-base">
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
            <div className="flex flex-col items-center justify-center gap-2 text-xl font-bold text-white">
              <p className="text-center text-xl tracking-[0.5rem] md:text-4xl">
                MEN
              </p>
              <button className="rounded-md border border-white px-8 py-2 text-sm font-semibold group-hover:bg-white group-hover:text-black md:text-base">
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
        <div className="group relative h-[100px] w-full md:col-span-2 md:h-[160px]">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2 text-xl font-bold text-white">
              <p className="text-center text-sm tracking-[0.5rem] md:text-2xl">
                ACCESSORIES
              </p>
              <button className="rounded-md border border-white px-8 py-2 text-sm font-semibold group-hover:bg-white group-hover:text-black md:text-base">
                EXPLORE
              </button>
            </div>
          </div>
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
