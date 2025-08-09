import type { MDXComponents } from 'mdx/types';
import ClassPatchNote from './components/ClassPatchNote';
import SpellList from './components/SpellList';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ClassPatchNote,
    SpellList,
    ...components,
  };
}
