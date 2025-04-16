import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/web-components/m-button.js',
      name: 'MyUiKit',
      fileName: () => 'my-ui-kit-web.js',
      formats: ['iife'],
    },
  },
});
