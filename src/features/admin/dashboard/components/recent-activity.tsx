import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const activities = [
  {
    icon: "📰",
    title: "New news article published",
    user: "Admin",
    time: "10 min ago",
  },
  {
    icon: "👤",
    title: "New user registered",
    user: "Harish Solanki",
    time: "32 min ago",
  },
  {
    icon: "📢",
    title: "Advertisement approved",
    user: "Admin",
    time: "1 hour ago",
  },
  {
    icon: "📷",
    title: "Gallery updated",
    user: "Admin",
    time: "3 hours ago",
  },
];

export function RecentActivity() {
  return (
    <Card className="border-[#E5E2D8] shadow-sm">

      <CardHeader>

        <CardTitle className="text-base font-bold">
          Recent Activity
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-5">

        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex gap-3"
          >

            <div
              className="
                flex h-9 w-9
                shrink-0
                items-center justify-center
                rounded-xl
                bg-[#F5EFE1]
                text-sm
              "
            >
              {activity.icon}
            </div>

            <div className="min-w-0">

              <p className="text-xs font-semibold text-[#292A20]">
                {activity.title}
              </p>

              <p className="mt-1 text-[10px] text-[#96948A]">
                {activity.user} · {activity.time}
              </p>

            </div>

          </div>
        ))}

      </CardContent>

    </Card>
  );
}