/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // 甘美書房のブランドカラー
                warm: {
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#E8E8E8',
                    300: '#D4BFAE',
                    400: '#D2691E',
                    500: '#8B4513',
                    600: '#6B3410',
                    700: '#4B240B',
                    800: '#2D2D2D',
                    900: '#1A1A1A',
                },
                sage: {
                    50: '#F8FAF8',
                    100: '#F1F5F1',
                    200: '#E1EAE1',
                    300: '#C8D5C8',
                    400: '#A8BBA8',
                    500: '#7A947A',
                    600: '#5D735D',
                    700: '#475847',
                    800: '#334333',
                    900: '#232E23',
                }
            },
            fontFamily: {
                'sans': ['Noto Sans JP', 'system-ui', 'sans-serif'],
                'serif': ['Playfair Display', 'Georgia', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.5s ease-out forwards',
                'shimmer': 'shimmer 2s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(210, 105, 30, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(210, 105, 30, 0.8)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: '#2D2D2D',
                        fontFamily: 'Noto Sans JP, system-ui, sans-serif',
                        lineHeight: '1.7',
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        function ({ addComponents, addUtilities, theme }) {
            addComponents({
                '.glass': {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                },
                '.glass-dark': {
                    backgroundColor: 'rgba(45, 45, 45, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                },
                '.btn-primary': {
                    backgroundColor: theme('colors.warm.400'),
                    color: 'white',
                    padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
                    borderRadius: theme('borderRadius.lg'),
                    fontWeight: theme('fontWeight.medium'),
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: theme('colors.warm.500'),
                        transform: 'translateY(-2px)',
                        boxShadow: theme('boxShadow.lg'),
                    }
                },
                '.btn-secondary': {
                    backgroundColor: 'transparent',
                    color: theme('colors.warm.500'),
                    border: `2px solid ${theme('colors.warm.500')}`,
                    padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
                    borderRadius: theme('borderRadius.lg'),
                    fontWeight: theme('fontWeight.medium'),
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: theme('colors.warm.500'),
                        color: 'white',
                    }
                }
            });

            addUtilities({
                '.focus-ring': {
                    '&:focus': {
                        outline: 'none',
                        boxShadow: `0 0 0 3px ${theme('colors.warm.400')}40`,
                    }
                }
            });
        }
    ],
}
