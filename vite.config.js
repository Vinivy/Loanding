import { defineconfig } from 'vite'
import react from '@vitejs/plungin-react'

export default defineconfig({
  plugins: [react()],
  base: '/React-page'
})
