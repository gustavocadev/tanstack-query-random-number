import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './index.html',
    title: 'Rsbuild with React',
    meta: {
      description:
        'Rsbuild with React starter template with TanStack/react-query',
      keywords: 'Rsbuild, React, TanStack, react-query',
    },
    tags: [
      {
        tag: 'script',
        attrs: { src: 'https://cdn.tailwindcss.com' },
      },
    ],
  },
});
