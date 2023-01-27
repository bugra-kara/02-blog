/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontSize: {
          xsx: '0.6rem',
          xlx: '1.35rem',
          date: '40px',
          day: '13px',
          small: '11px',
          head: '15px',
          most: '1.125rem',
          extrasmall: '10px'
        },
        colors: {
          'kb': '#3a82e6',
          'kb-hover' : "#4d8ee8",
          "price": "#72b572",
          "danger": "#d35353",
          "icon-bg": "#a5a5a5",
          "h": "#212d45",
          "ah": "#3982e5",
          "link": "#171616",
          "text-gray": "#506172",
          "fb" : "#4267b2",
          "tw" : "#00acee",
          "ln" : "#0072b1",
          "wp" : "#1e7d34",
          "card-gray" : "#9babb6"
        },
        backgroundImage: {
          'author': "url('http://localhost:3000/static/media/bitcoin-86.6e9500524961ecf854de.jpg')",
        }
      },
    },
    plugins: [require('@tailwindcss/line-clamp')],
  }