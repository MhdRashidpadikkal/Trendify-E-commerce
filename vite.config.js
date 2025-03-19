
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from "path"
import { defineConfig } from "vite"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react(), tailwindcss()],
 resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
})

