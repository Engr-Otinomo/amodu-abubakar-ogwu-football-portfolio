/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sport: {
          navy: '#071A2D',
          dark: '#0D2F4F',
          surface: '#0B243D',
          card: '#0F3458',
          border: 'rgba(255, 255, 255, 0.08)',
          emerald: '#22C55E',
          green: '#4ADE80',
          gold: '#F5B942',
          light: '#E5E7EB',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        display: ['"Barlow Semi Condensed"', 'Oswald', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'pitch-pattern': "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 70%)",
        'hero-gradient': "linear-gradient(to bottom, rgba(7, 26, 45, 0.75) 0%, rgba(7, 26, 45, 0.95) 100%)",
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
