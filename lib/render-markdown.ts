import { remark } from "remark";
import remarkHtml from "remark-html";

/**
 * Renders trusted markdown (mock CMS / static content) to an HTML string for {@link BlogContent}.
 */
export async function renderMarkdown(markdown: string): Promise<string> {
  const file = await remark().use(remarkHtml).process(markdown);
  return String(file);
}
