import { notFound } from "next/navigation";

import PostForm from "@/components/admin/PostForm";
import { getRecordById } from "@/lib/blog/storage";

type EditPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage({ params }: EditPageProps) {
  const { id } = await params;
  const post = await getRecordById(id);
  if (!post) notFound();
  return <PostForm mode="edit" initial={post} />;
}
