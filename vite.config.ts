import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src/'),
            '@store': path.resolve(__dirname, './src/store'),
            '@api': path.resolve(__dirname, './src/api'),
            '@modules/*': path.resolve(__dirname, './src/modules'),
            '@pages/*': path.resolve(__dirname, './src/pages'),
            '@assets/*': path.resolve(__dirname, './src/assets'),
            '@components/*': path.resolve(__dirname, './src/components'),
            '@types': path.resolve(__dirname, './src/types'),
            '@helpers/*': path.resolve(__dirname, './src/helpers'),
            '@constants/*': path.resolve(__dirname, './src/constants'),
        },
    },
    base: '',
});
