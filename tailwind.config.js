/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
     fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '20px'],
      xl: ['44px', '35.53px'],
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto Flex", "sans-serif"],
      },
      
      colors: {
        
        grayText: "#777C85",
        grayblue:"#4E5DC0",
        grayBlack:"#16171C",
      },
    },},
  plugins: [],
};