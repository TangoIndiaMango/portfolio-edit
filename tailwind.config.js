/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'curved-monitor': "url('/assets/curved_monitor.png')",
        'curved-monitor-2': "url('/assets/curvedmonitor.png')",
        'screen-desktop': "url('/assets/screendesktop.png')",
        'building': "url('/assets/buildings.png')",
      }
    },
  },
  plugins: [],
}

