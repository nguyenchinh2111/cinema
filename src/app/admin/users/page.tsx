import { AdminLayout } from "@/components/admin";
import { UsersList } from "@/components/admin/users/UsersList";

export default function UsersPage() {
  return (
    <AdminLayout>
      <UsersList />
    </AdminLayout>
  );
}
