import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        outDir: 'dist',  // This defines where the built files go
    },
    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.jsx'],
            refresh: true,
        }),
    ],
});
