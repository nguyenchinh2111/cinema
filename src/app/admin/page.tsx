import { AdminLayout } from "@/components/admin";
import { DashboardOverview } from "@/components/admin/dashboard/DashboardOverview";

export default function AdminPage() {
  return (
    <AdminLayout>
      <DashboardOverview />
    </AdminLayout>
  );
}
