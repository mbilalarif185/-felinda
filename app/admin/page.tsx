import AdminShell from "@/components/admin/AdminShell";
import PostList from "@/components/admin/PostList";
import { loadAllRecords } from "@/lib/blog/storage";

export default async function AdminDashboardPage() {
  const posts = await loadAllRecords();
  const sorted = [...posts].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

  return (
    <AdminShell title="All posts">
      <PostList initialPosts={sorted} />
    </AdminShell>
  );
}
