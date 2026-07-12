/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0912',
        surface: '#14101F',
        surface2: '#1B1530',
        line: '#2E2650',
        signal: '#9B6BFF',
        flow: '#52E0C4',
        silver: '#C7C2E0',
        ink: '#F1EEFA',
        muted: '#948DB0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(237,239,243,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(237,239,243,0.035) 1px, transparent 1px)',
      },
      keyframes: {
        pulseline: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        pulseline: 'pulseline 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
