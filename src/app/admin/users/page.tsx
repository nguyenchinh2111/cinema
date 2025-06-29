import { AdminLayout } from "@/components/admin";

export default function UsersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#1E201E] mb-2">
            👥 Users Management
          </h2>
          <p className="text-[#1E201E] text-lg">
            Manage all users in your cinema system.
          </p>
        </div>

        <div className="rounded-lg border border-gray-300 bg-white backdrop-blur-sm text-[#1E201E] shadow-lg p-6">
          <h3 className="text-lg font-medium text-[#1E201E] mb-4">
            User Statistics
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1E201E]">1,234</div>
              <p className="text-sm text-gray-500">Total Users</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1E201E]">156</div>
              <p className="text-sm text-gray-500">Active Today</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1E201E]">89</div>
              <p className="text-sm text-gray-500">New This Month</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
