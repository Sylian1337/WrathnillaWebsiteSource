// src/middleware.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function middleware(req: any) {
  const url = req.nextUrl.clone();
  if (url.pathname.startsWith('/patch-notes/')) {
    const slug = url.pathname.split('/')[2];
    const mdxDir = path.join(process.cwd(), 'src/content/patch-notes');
    const exists = fs.existsSync(path.join(mdxDir, `${slug}.mdx`));
    if (!exists) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/patch-notes/:slug*'],
};
