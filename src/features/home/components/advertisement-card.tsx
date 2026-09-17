import Link from "next/link";

export function AdvertisementCard() {
  return (
    <section>

      <div
        className="
          relative h-full
          min-h-[270px]
          overflow-hidden
          rounded-3xl
          bg-[#F5E8CB]
          p-7
        "
      >

        <span
          className="
            absolute right-5 top-5
            rounded-md
            bg-[#D99A2B]
            px-2 py-1
            text-[9px] font-black
            text-white
          "
        >
          AD
        </span>

        <div className="relative z-10 max-w-[220px]">

          <p className="text-xs font-bold uppercase tracking-widest text-[#8B6A32]">
            Support local
          </p>

          <h3
            className="
              mt-3
              text-2xl font-black
              leading-tight
              text-[#5B4429]
            "
          >
            Grow your business with our village.
          </h3>

          <p className="mt-3 text-xs leading-5 text-[#816C50]">
            Advertise your business and reach the local
            community.
          </p>

          <Link
            href="/advertise"
            className="
              mt-5 inline-flex
              rounded-xl
              bg-[#3F3F2F]
              px-4 py-2.5
              text-xs font-bold
              text-white
              transition-all
              hover:-translate-y-0.5
              hover:bg-[#4D7C5A]
            "
          >
            Advertise with us →
          </Link>

        </div>

        <div
          className="
            absolute -bottom-2 -right-3
            text-[100px]
            opacity-90
            animate-[homeStore_5s_ease-in-out_infinite]
          "
        >
          🏪
        </div>

      </div>

    </section>
  );
}