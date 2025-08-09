import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '../../../mdx-components';
import AnimatedPatchNote from '../../../components/AnimatedPatchNote'; // adjust path if needed

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content/patch-notes'));
  return files.map((file) => ({
    slug: file.replace(/\.mdx?$/, ''),
  }));
}

export default async function PatchNotePage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'src/content/patch-notes', `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);
  const components = useMDXComponents({});

  return (
    <AnimatedPatchNote
      title={data.title}
      date={data.date}
      content={<MDXRemote source={content} components={components} />}
    />
  );
}
