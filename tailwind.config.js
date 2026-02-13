/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'dark',
    {
      pattern: /dark:bg-slate-(700|800|900|950)/,
    },
    {
      pattern: /dark:text-slate-(50|100|200|300|400)/,
    },
    {
      pattern: /dark:border-slate-(600|700|800)/,
    },
    // Keep gray for backward compatibility during transition
    {
      pattern: /dark:bg-gray-(700|800|900)/,
    },
    {
      pattern: /dark:text-gray-(100|300|400)/,
    },
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			golden: {
  				'50': '#fdf9f0',
  				'100': '#fcf2dc',
  				'200': '#f9e4b8',
  				'300': '#f5d08a',
  				'400': '#f0b855',
  				'500': '#e89f2a',
  				'600': '#d4821f',
  				'700': '#b0641b',
  				'800': '#8f4f1d',
  				'900': '#74411a'
  			},
  			cream: {
  				'50': '#fdfcfb',
  				'100': '#faf8f5',
  				'200': '#f5f0e8',
  				'300': '#ebe4d6',
  				'400': '#ddd4c1',
  				'500': '#c9bda5',
  				'600': '#a89985',
  				'700': '#857968',
  				'800': '#6e6358',
  				'900': '#5a524a'
  			},
  			earth: {
  				'50': '#f6f5f0',
  				'100': '#e8e6da',
  				'200': '#d2ceb6',
  				'300': '#b6b08c',
  				'400': '#9e966b',
  				'500': '#847a52',
  				'600': '#665f3f',
  				'700': '#524b34',
  				'800': '#433e2e',
  				'900': '#39352b'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			serif: [
  				'Merriweather',
  				'Georgia',
  				'serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.6s ease-out',
  			float: 'float 3s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
};
