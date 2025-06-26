import {MoviesList} from "@/components/admin/movies/MoviesList";
import { AdminLayout } from "@/components/admin";

export default function MoviesPage() {
  return (
    <AdminLayout>
      <MoviesList />
    </AdminLayout>
  );
}
