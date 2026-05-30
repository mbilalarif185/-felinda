import { revalidatePath } from "next/cache";

export function revalidateBlogPaths(slug?: string): void {
  revalidatePath("/blog");
  revalidatePath("/admin");
  if (slug) {
    revalidatePath(`/blog/${slug}`);
    revalidatePath(`/admin/preview/${slug}`);
  }
}
