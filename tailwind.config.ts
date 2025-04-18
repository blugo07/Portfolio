
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors
				tron: {
					blue: "#1EAEDB",
					darkBlue: "#0FA0CE",
					purple: "#8B5CF6",
					darkPurple: "#1A1F2C",
					black: "#000000",
					grayAccent: "#8E9196",
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(2px, -2px)' },
					'60%': { transform: 'translate(-1px, -1px)' },
					'80%': { transform: 'translate(1px, 1px)' }
				},
				'circle-expand': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(1.5)', opacity: '0' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'domain-expand': {
					'0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'scale(1) rotate(360deg)', opacity: '0' }
				},
				'beam': {
					'0%': { width: '0%', opacity: '0' },
					'50%': { width: '100%', opacity: '0.8' },
					'100%': { width: '0%', opacity: '0' }
				},
				'grid-flow': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s infinite ease-in-out',
				'float': 'float 3s infinite ease-in-out',
				'glitch': 'glitch 0.8s infinite ease-in-out',
				'circle-expand': 'circle-expand 1.5s forwards',
				'slide-in-left': 'slide-in-left 0.8s forwards',
				'slide-in-right': 'slide-in-right 0.8s forwards',
				'fade-in': 'fade-in 1s forwards',
				'domain-expand': 'domain-expand 2.5s forwards',
				'beam': 'beam 3s infinite ease-in-out',
				'grid-flow': 'grid-flow 20s infinite linear'
			},
			backgroundImage: {
				'grid-pattern': "linear-gradient(to right, #1EAEDB20 1px, transparent 1px), linear-gradient(to bottom, #1EAEDB20 1px, transparent 1px)",
				'gojo-background': "radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(26,31,44,1) 100%)",
				'tron-glow': "radial-gradient(circle, rgba(30,174,219,0.4) 0%, rgba(0,0,0,0) 70%)",
				'tron-grid': "linear-gradient(to right, rgba(30,174,219,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,174,219,0.15) 1px, transparent 1px)"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
