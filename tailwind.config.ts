import type { Config } from "tailwindcss"

const config = {
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
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            screens: {
                'xs': '475px',  // Extra small devices
                'sm': '640px',  // Small devices (phones, 640px and up)
                'md': '768px',  // Medium devices (tablets, 768px and up)
                'lg': '1024px', // Large devices (desktops, 1024px and up)
                'xl': '1280px', // Extra large devices (large desktops, 1280px and up)
                '2lg': '1400px',
                '2xl': '1536px' // Extra extra large devices (larger desktops, 1536px and up)
              },
            colors: {
                envision_blue: "#272F74",
                esperanza_dark_blue: "#031337",
                esperanza_very_dark_blue: "#020B2B",
                esperanza_cyan_blue:"#159CCC",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                flip: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '50%': { transform: 'rotateY(180deg)' },
                    '100%': { transform: 'rotateY(360deg)' },
                  },

                "rotate-lr": {
                    "0%": { transform: "rotateY(0deg)", opacity: "100%" },
                    "50%": { transform: "rotateY(180deg)", opacity: "100%" },
                    "100%": { transform: "rotateY(0deg)", opacity: "100%" },
                },
                "slide-in-left": {
                    "0%": { transform: "translateX(-100%)" },
                    "50%": { transform: "translateX(0%)" },
                    "75%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                "costume-pulse": {
                    "0%": { scale: "100%" },
                    "50%": { scale: "120%" },
                    "75%": { scale: "100%" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                rotate: "rotate-lr 6s ease-in-out infinite",
                flip: 'flip 4s infinite',
                "costume-pulse": "costume-pulse 1s ease-in-out infinite",
                "slide-in-left": "slide-in-left 4s linear infinite",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
    ],
} satisfies Config

export default config
