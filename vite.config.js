import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        contact: 'contact.html',
        journal: 'journal.html',
        mission: 'mission.html',
        team: 'team.html',
        login: 'login.html',
       Services: 'services.html'
      }
    }
  }
});
