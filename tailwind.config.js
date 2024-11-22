/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                "scrolling-banner": {
                    from: {transform: "translateX(0)"},
                    to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
                },
                "scrolling-banner-vertical": {
                    from: {transform: "translateY(0)"},
                    to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
                },
            },
            animation: {
                "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
                "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            "luxo": {
                extend: 'dark',
                colors: {
                    background: '#1e1c1c',
                    foreground: '#ffffff',
                    content1: {DEFAULT: '#433f40', foreground: '#ffffff'},
                    base: {
                        DEFAULT: '#433f40',
                        foreground: '#ffffff'
                    },
                    focus: '#D9BA80',
                    primary: {
                        100: '#FDF8E8',
                        200: '#FBF1D1',
                        300: '#F3E2B7',
                        400: '#E8D1A0',
                        500: '#D9BA80',
                        600: '#BA965D',
                        700: '#9C7540',
                        800: '#7D5728',
                        900: '#684118',
                        foreground: '#1b1b1b',
                        DEFAULT: '#D9BA80',
                    }
                }
            }
        }
    })],
};
