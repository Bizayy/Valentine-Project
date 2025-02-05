import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('https://cdn.dribbble.com/userupload/13041098/file/original-7eb5306a17096ef54fcbb915f65bc0f4.png')",
            },
        },
    },
    plugins: [
    ],
} satisfies Config;
