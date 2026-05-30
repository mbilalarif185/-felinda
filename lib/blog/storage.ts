import "server-only";

import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { get, head, put } from "@vercel/blob";

import type { BlogPostRecord, BlogPostsFile } from "@/lib/blog/types";

const DATA_DIR = path.join(process.cwd(), "data", "blog");
const POSTS_FILE = path.join(DATA_DIR, "posts.json");
const BLOB_POSTS_PATH = "blog/posts.json";

function emptyFile(): BlogPostsFile {
  return { version: 1, posts: [] };
}

function normalizeFile(data: unknown): BlogPostsFile {
  if (
    data &&
    typeof data === "object" &&
    "posts" in data &&
    Array.isArray((data as BlogPostsFile).posts)
  ) {
    return { version: 1, posts: (data as BlogPostsFile).posts };
  }
  return emptyFile();
}

async function readBlobJson(): Promise<unknown | null> {
  const result = await get(BLOB_POSTS_PATH, { access: "public" });
  if (result.statusCode !== 200 || !result.stream) return null;
  const text = await new Response(result.stream).text();
  return JSON.parse(text) as unknown;
}

async function readFromBlob(): Promise<BlogPostsFile | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  try {
    try {
      return normalizeFile(await readBlobJson());
    } catch {
      // Fallback: public blob URLs are CDN-cached; bust cache when SDK read fails.
      const meta = await head(BLOB_POSTS_PATH);
      if (!meta?.url) return null;
      const res = await fetch(`${meta.url}?_=${Date.now()}`, { cache: "no-store" });
      if (!res.ok) return null;
      return normalizeFile(await res.json());
    }
  } catch {
    return null;
  }
}

async function writeToBlob(file: BlogPostsFile): Promise<void> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN is required for remote blog storage.");
  }
  await put(BLOB_POSTS_PATH, JSON.stringify(file, null, 2), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    // Minimum TTL so overwrites propagate quickly (default is ~1 month on the CDN).
    cacheControlMaxAge: 60,
  });
}

async function readFromDisk(): Promise<BlogPostsFile> {
  try {
    const raw = await readFile(POSTS_FILE, "utf8");
    return normalizeFile(JSON.parse(raw));
  } catch {
    return emptyFile();
  }
}

async function writeToDisk(file: BlogPostsFile): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(POSTS_FILE, `${JSON.stringify(file, null, 2)}\n`, "utf8");
}

export function usesRemoteBlogStorage(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export async function loadAllRecords(): Promise<BlogPostRecord[]> {
  const remote = await readFromBlob();
  if (remote && remote.posts.length > 0) return remote.posts;
  const local = await readFromDisk();
  return local.posts;
}

export async function saveAllRecords(posts: BlogPostRecord[]): Promise<void> {
  const file: BlogPostsFile = { version: 1, posts };
  if (usesRemoteBlogStorage()) {
    await writeToBlob(file);
  }
  try {
    await writeToDisk(file);
  } catch (err) {
    if (!usesRemoteBlogStorage()) throw err;
  }
}

export async function getRecordById(id: string): Promise<BlogPostRecord | undefined> {
  const posts = await loadAllRecords();
  return posts.find((p) => p.id === id);
}

export async function getRecordBySlug(slug: string): Promise<BlogPostRecord | undefined> {
  const posts = await loadAllRecords();
  return posts.find((p) => p.slug === slug);
}
