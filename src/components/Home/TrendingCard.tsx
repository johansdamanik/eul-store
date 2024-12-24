import clsx from "clsx";

type TrendingCardProps = {
  className?: string; // className bersifat opsional
};

export default function TrendingCard({ className }: TrendingCardProps) {
  return (
    <div className={clsx("w-full border", className)}>
      <div className="aspect-[4/5] w-full">
        <img
          src="https://dummyimage.com/500x500"
          alt="dummy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold">Winter Vest Knitted</p>
          <p>$100</p>
        </div>
        <div className="mt-4 flex w-full justify-center">
          <button className="border border-black px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-black hover:text-white">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
