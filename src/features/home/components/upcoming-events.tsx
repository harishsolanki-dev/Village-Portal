import { SectionHeading } from "@/src/components/ui/section-heading";


const events = [
  {
    day: "15",
    month: "SEP",
    title: "Temple Festival Opening",
    time: "10:00 AM",
    location: "Village Temple",
  },
  {
    day: "21",
    month: "SEP",
    title: "Community Health Camp",
    time: "09:00 AM",
    location: "Community Hall",
  },
  {
    day: "02",
    month: "OCT",
    title: "Clean Village Drive",
    time: "08:00 AM",
    location: "Main Village Area",
  },
];

export function UpcomingEvents() {
  return (
    <section>

      <SectionHeading
        icon="📅"
        title="Upcoming Events"
        href="/events"
      />

      <div className="overflow-hidden rounded-2xl border border-[#E5E2D8] bg-white">

        {events.map((event, index) => (
          <div
            key={event.title}
            className={`
              flex gap-4 p-4
              transition-colors
              hover:bg-[#FAFAF7]
              ${
                index !== events.length - 1
                  ? "border-b border-[#ECE9E0]"
                  : ""
              }
            `}
          >

            <div
              className="
                flex h-14 w-14 shrink-0
                flex-col items-center
                justify-center
                rounded-xl
                bg-[#F5EFE1]
              "
            >
              <span className="text-lg font-black">
                {event.day}
              </span>

              <span className="text-[9px] font-bold text-[#D99A2B]">
                {event.month}
              </span>
            </div>

            <div className="min-w-0">

              <h3 className="text-sm font-bold">
                {event.title}
              </h3>

              <p className="mt-1 text-[11px] text-[#858379]">
                🕐 {event.time}
              </p>

              <p className="mt-1 truncate text-[11px] text-[#858379]">
                📍 {event.location}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}