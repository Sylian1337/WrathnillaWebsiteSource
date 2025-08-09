import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AnimatedPatchNote from '../../../components/AnimatedPatchNote';
import ClassPatchNote from '../../../components/ClassPatchNote';
import SpellList from '../../../components/SpellList';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

export async function generateStaticParams() {
  try {
    const contentDirectory = join(process.cwd(), 'src/content/patch-notes');
    const files = readdirSync(contentDirectory);
    return files.map((file: string) => ({
      slug: file.replace(/\.mdx?$/, ''),
    }));
  } catch (error) {
    console.error('Error reading patch notes directory:', error);
    return [];
  }
}

export default async function PatchNotePage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const contentDirectory = join(process.cwd(), 'src/content/patch-notes');
    const filePath = join(contentDirectory, `${slug}.mdx`);
    const fileContent = readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent);
    
    // Create components object directly instead of using the hook
    const components = {
      ClassPatchNote,
      SpellList,
    };

    return (
      <AnimatedPatchNote
        title={data.title as string}
        date={data.date as string}
        content={<MDXRemote source={content} components={components} />}
      />
    );
  } catch (error) {
    console.error('Error loading patch note:', error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Patch Note Not Found</h1>
          <p className="text-gray-600">The requested patch note could not be loaded.</p>
        </div>
      </div>
    );
  }
}
