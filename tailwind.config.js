const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
    	boxShadow: {
    		everySide: '0 0 15px rgba(0, 0, 0, 0.25)',
    		glow: '0 0 15px #FD9905'
    	},
    	dropShadow: {
    		glow: '0 0 15px #FD9905',
    		glowDark: '0 0 15px rgba(0, 0, 0, 0.25)',
    	},
    	colors: {
    		theme: "#FD9905"
    	},
      animation: {
    		spin: 'spin 10s linear infinite',
        'move-up-down': 'move-up-down 7s ease-in-out infinite',
        'move-left-right': 'move-left-right 3s ease-out infinite',
        moveCard: 'moveCard 3s ease-in-out infinite',
      },
      keyframes: {
        'move-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'move-left-right': {
          '0%, 100%': { transform: 'translateX(20px)' },
          '50%': { transform: 'translateX(-20px)' },
        },
			moveCard: {
				 '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
			},
      },
    },
  },
  plugins: [],
});