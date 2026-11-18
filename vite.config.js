import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
    root: 'Demo/src',
    plugins: [glsl()],
    server: { open: true }
})