import { remark } from "remark";
import remarkHtml from "remark-html";

import { normalizeMarkdownExternalLinks } from "@/lib/blog/normalize-markdown-links";

/**
 * Renders trusted markdown (mock CMS / static content) to an HTML string for {@link BlogContent}.
 */
export async function renderMarkdown(markdown: string): Promise<string> {
  const normalized = normalizeMarkdownExternalLinks(markdown);
  const file = await remark().use(remarkHtml).process(normalized);
  return String(file);
}
