/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{svelte,js,ts,html}',
    ],
    plugins: [
        require("@tailwindcss/typography"),
        require( 'daisyui' )
    ],
    daisyui: {
        themes: [ "cyberpunk" ]
    }
}

