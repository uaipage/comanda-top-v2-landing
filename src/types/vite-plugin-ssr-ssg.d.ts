
declare module 'vite-plugin-ssr-ssg' {
  import { Plugin } from 'vite';
  
  interface SSROptions {
    entry: string;
    routes: string[];
    crittersOptions?: {
      preload?: string;
      preloadFonts?: boolean;
    };
  }

  export default function ssrSsg(options: SSROptions): Plugin;
}
