import { DashboardOverview } from "@/src/features/admin/dashboard/components/dashboard-overview";
import { DashboardStats } from "@/src/features/admin/dashboard/components/dashboard-stat";
import LatestNewsTable from "@/src/features/admin/dashboard/components/latest-news-table";
import { RecentActivity } from "@/src/features/admin/dashboard/components/recent-activity";


export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-[1600px]">

      {/* Header */}
      <div className="mb-8">

        <p className="text-sm font-semibold text-[#4D7C5A]">
          Overview
        </p>

        <h1 className="mt-1 text-3xl font-black tracking-tight text-[#292A20]">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-[#858379]">
          Monitor and manage your Village Portal.
        </p>

      </div>

      <DashboardStats />

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_0.8fr]">

        <DashboardOverview />

        <RecentActivity />

      </div>

      <div className="mt-6">

        <LatestNewsTable />

      </div>

    </div>
  );
}