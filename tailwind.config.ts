import type { Config } from 'tailwindcss';
import animate from "tailwindcss-animate";
import typography from '@tailwindcss/typography';
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
            },
            keyframes: {
                "plane-bounce": {
                    "0%, 100%": { transform: "translateY(0) rotate(-10deg)" },
                    "50%": { transform: "translateY(-20px) rotate(10deg)" }
                }
            },
            animation: {
                "plane": "plane-bounce 2s ease-in-out infinite"
            }
        },
    },
    variants: {
        scrollbar: ['rounded', 'dark']
    },
    plugins: [
        animate,
        typography,
        scrollbar({ nocompatible: true }),
    ],
};

export default config;
