import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  
})
 {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": {
          background: '#ffffff', 
          text: '#000000', 
        },
        "dark": {
          background: '#121212', 
          text: '#ffffff', 
        },
      },
    },
  },
  plugins: [],
}