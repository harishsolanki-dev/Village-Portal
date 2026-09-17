import { AdminHeader } from "@/src/features/admin/dashboard/components/admin-header";
import { AdminSidebar } from "@/src/features/admin/dashboard/components/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">

      <AdminSidebar />

      <div className="lg:pl-64">

        <AdminHeader />

        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}