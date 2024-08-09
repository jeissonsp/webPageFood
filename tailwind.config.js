/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Rubik': [ "'Rubik'", 'sans-serif']
      },
      height:{
        'height-image': "83.5%"
      },
      gridTemplateColumns:{
        '65-35': '65% 35%'
      },
      colors:{
        "gris-nav": "#333",
        "gris-texto": "#555",
        "naranja": "#e67e22",
        "naranja-hover":"#cf711f",
        "beage": "#fdf2e9",
        "cafe": "#45260a"
      },
      backgroundColor:{
        "background-primera":"#fdf2e9",
        "backgrouund-tag-verde": "#51cf66",
        "backgrouund-tag-vegan": "#94d82d",
        "backgrouund-tag-paleo": "#ffd43b", 
        "background-naranja":"#eb984e"
        
      },
      animation:{
        'show-card-icon': 'showCardIcon 300ms linear'
      },
      keyframes:{
        showCardIcon:{
          'from':{ transform: 'translateY(-200%)'},
          'to': { transform: 'translateY(0%)'},
        },
      }
      
    }
  },
  variants:{
    animation:['responsive','hover','group-hover'],
    animate:['responsive','hover','group-hover'],
    fontSize:['responsive','hover','group-hover']
  },
  plugins: [],
}
