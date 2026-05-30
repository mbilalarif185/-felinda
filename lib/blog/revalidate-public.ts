import { revalidatePath } from "next/cache";

export function revalidateBlogPaths(slug?: string): void {
  revalidatePath("/blog");
  if (slug) revalidatePath(`/blog/${slug}`);
}
