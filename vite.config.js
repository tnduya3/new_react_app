import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import fs from 'fs'

// Plugin để sao chép file .nojekyll vào thư mục dist
const copyNojekyllPlugin = () => {
  return {
    name: 'copy-nojekyll',
    writeBundle() {
      fs.writeFileSync(resolve('dist', '.nojekyll'), '')
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyNojekyllPlugin()],
  base: '/new_react_app/', // Đường dẫn repository của bạn trên GitHub Pages
})
