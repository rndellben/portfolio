// Tailwind CSS Configuration
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        secondary: '#6B7280',
        accent: '#10B981',
        'background-light': '#F9FAFB',
        'background-dark': '#111827',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
};

// Theme Button Functionality
document.addEventListener('DOMContentLoaded', function () {
  const themeButtons = document.querySelectorAll('.theme-btn');

  themeButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const isDarkMode = document.documentElement.classList.contains('dark');
      const bgColor = isDarkMode
        ? this.getAttribute('data-bg-dark')
        : this.getAttribute('data-bg-light');

      document.documentElement.style.setProperty('--page-bg', bgColor);
    });
  });
});
