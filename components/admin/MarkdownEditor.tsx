"use client";

import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import { blogEditorCommands, blogEditorExtraCommands } from "@/components/admin/editor-commands";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

type MarkdownEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  return (
    <div data-color-mode="light" className="admin-md-editor overflow-hidden rounded-xl border border-line">
      <MDEditor
        value={value}
        onChange={(v) => onChange(v ?? "")}
        height={420}
        preview="live"
        visibleDragbar={false}
        commands={blogEditorCommands}
        extraCommands={blogEditorExtraCommands}
      />
      <style jsx global>{`
        .admin-md-editor .w-md-editor-toolbar {
          flex-wrap: wrap;
          gap: 2px;
          padding: 6px 8px;
        }
        .admin-md-editor .w-md-editor-toolbar li > button {
          min-width: 2rem;
          height: 2rem;
          border-radius: 6px;
        }
        .admin-md-editor .w-md-editor-toolbar li > button:hover {
          background: rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </div>
  );
}
