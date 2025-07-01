import { AdminLayout } from "@/components/admin";
import { RoomsList } from "@/components/admin/rooms/RoomsList";

export default function MoviesPage() {
  return (
    <AdminLayout>
      <RoomsList />
    </AdminLayout>
  );
}
