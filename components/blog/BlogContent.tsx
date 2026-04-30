export type BlogContentProps = {
  html: string;
};

const prose =
  "blog-prose max-w-none font-sans text-base leading-relaxed text-muted " +
  "[&_a]:font-medium [&_a]:text-clay [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-ink " +
  "[&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-gold/70 [&_blockquote]:bg-champagneSoft/25 [&_blockquote]:py-4 [&_blockquote]:pl-5 [&_blockquote]:pr-4 [&_blockquote]:font-serif [&_blockquote]:text-lg [&_blockquote]:italic [&_blockquote]:text-ink/90 " +
  "[&_code]:rounded [&_code]:bg-shell [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_code]:text-noir " +
  "[&_h2]:mt-12 [&_h2]:scroll-mt-28 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:font-medium [&_h2]:text-ink [&_h2]:first:mt-0 " +
  "[&_h3]:mt-10 [&_h3]:scroll-mt-28 [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:font-medium [&_h3]:text-ink " +
  "[&_h4]:mt-8 [&_h4]:font-serif [&_h4]:text-xl [&_h4]:font-medium [&_h4]:text-ink " +
  "[&_hr]:my-12 [&_hr]:border-line " +
  "[&_li]:marker:text-goldDark " +
  "[&_ol]:my-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 " +
  "[&_p]:my-5 [&_p]:leading-relaxed " +
  "[&_pre]:my-8 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-line [&_pre]:bg-noir [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-cream " +
  "[&_strong]:font-semibold [&_strong]:text-ink " +
  "[&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-xl [&_table]:border [&_table]:border-line " +
  "[&_td]:border-line [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:text-sm " +
  "[&_th]:border-line [&_th]:bg-shell [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-sans [&_th]:text-xs [&_th]:font-semibold [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-muted " +
  "[&_ul]:my-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6";

export default function BlogContent({ html }: BlogContentProps) {
  return <div className={prose} dangerouslySetInnerHTML={{ __html: html }} />;
}
