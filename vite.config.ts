/// <reference types="vitest" />

import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.tsx'],
    setupFiles: ['./src/setupTest.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages/': path.resolve(__dirname, './src/pages'),
      '@widgets/': path.resolve(__dirname, './src/widgets'),
      '@entities/': path.resolve(__dirname, './src/entities'),
    },
  },
})
