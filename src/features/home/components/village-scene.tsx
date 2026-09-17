export function VillageScene() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[560px] lg:h-[440px]">

      {/* Sun */}
      <div
        className="
          absolute right-[14%] top-[5%]
          h-20 w-20
          rounded-full
          bg-[#D99A2B]
          shadow-[0_0_80px_rgba(217,154,43,0.25)]
          animate-[homeSun_6s_ease-in-out_infinite]
          sm:h-24 sm:w-24
        "
      />

      {/* Cloud */}
      <div
        className="
          absolute left-[8%] top-[18%]
          h-5 w-28
          rounded-full
          bg-white/10
          animate-[homeCloud_14s_linear_infinite]
        "
      />

      {/* Ground */}
      <div
        className="
          absolute bottom-6 left-1/2
          h-36 w-[90%]
          -translate-x-1/2
          rounded-[50%]
          bg-[#4D7C5A]/30
          [transform:translateX(-50%)_rotateX(60deg)]
        "
      />

      {/* Houses */}
      <VillageHouse
        className="
          absolute bottom-20 left-[14%]
          scale-125
          animate-[homeHouse_5s_ease-in-out_infinite]
        "
      />

      <VillageHouse
        className="
          absolute bottom-24 left-[48%]
          scale-90
          animate-[homeHouse_6s_ease-in-out_1s_infinite]
        "
      />

      {/* Trees */}
      <VillageTree
        className="
          absolute bottom-16 right-[10%]
          scale-125
          animate-[homeTree_5s_ease-in-out_0.5s_infinite]
        "
      />

      <VillageTree
        className="
          absolute bottom-14 right-[35%]
          scale-75
          animate-[homeTree_6s_ease-in-out_1.5s_infinite]
        "
      />

    </div>
  );
}

function VillageHouse({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        relative h-32 w-36
        [transform-style:preserve-3d]
        ${className}
      `}
    >

      <div
        className="
          absolute bottom-0 left-5
          h-20 w-24
          rounded-sm
          bg-[#E7D8B7]
          shadow-[10px_10px_0_rgba(0,0,0,0.12)]
        "
      >

        <div
          className="
            absolute bottom-0 left-9
            h-12 w-9
            rounded-t-md
            bg-[#704D35]
          "
        />

        <div
          className="
            absolute left-3 top-6
            h-8 w-8
            rounded-sm
            border-2 border-[#4D7C5A]
            bg-[#9DBAA1]
          "
        />

        <div
          className="
            absolute right-3 top-6
            h-8 w-8
            rounded-sm
            border-2 border-[#4D7C5A]
            bg-[#9DBAA1]
          "
        />

      </div>

      <div
        className="
          absolute left-1 top-1
          h-0 w-0
          border-l-[60px]
          border-r-[60px]
          border-b-[55px]
          border-l-transparent
          border-r-transparent
          border-b-[#704D35]
        "
      />

    </div>
  );
}

function VillageTree({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        relative h-32 w-20
        ${className}
      `}
    >

      <div
        className="
          absolute bottom-0 left-8
          h-16 w-6
          rounded-b-md
          bg-[#704D35]
        "
      />

      <div
        className="
          absolute left-0 top-1
          h-16 w-16
          rounded-full
          bg-[#4D7C5A]
          shadow-[10px_10px_0_rgba(39,69,48,0.25)]
        "
      />

      <div
        className="
          absolute left-7 top-7
          h-14 w-14
          rounded-full
          bg-[#668A69]
        "
      />

    </div>
  );
}