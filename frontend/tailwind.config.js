/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class', '[data-mode="chakra-ui-dark"]'],
    content: [
        './src/**/*.{js,jsx,ts,tsx,jsx}',
        './public/index.html',
        './src/auth/Register.jsx',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('flowbite/plugin')],
};