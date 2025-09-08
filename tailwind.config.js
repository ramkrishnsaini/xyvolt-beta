// CommonJS works fine here
module.exports = {
  content: ["./**/*.html"],   // you have multiple html files
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu','system-ui','Segoe UI','Roboto','Arial','sans-serif'],
      },
      colors: {
        ub: {
          orange: '#E95420',
          aubergine: '#772953',
          toledo: '#2C001E',
          warm: '#AEA79F',
          paper: '#F7F7F7',
        },
        ink: '#1A0F16',
        steel: '#20121C',
        veil: 'rgba(255,255,255,0.06)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)',
        glow: '0 0 0 2px rgba(233,84,32,0.25), 0 10px 30px rgba(0,0,0,0.45)',
      },
    },
  },
  // keep plugins off for the first test; turn on after it works
  // plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  safelist: [
    'bg-ink','bg-ub-orange','text-ub-orange','bg-ub-aubergine','bg-ub-toledo',
    'shadow-soft','shadow-glow','font-ubuntu','bg-ub-orange/15'
  ],
};
