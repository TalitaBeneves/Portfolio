import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      

    ::-webkit-scrollbar {
      width:10px;
      height: 10px;
      
    }
    

    /* fundo da barra,*/
    ::-webkit-scrollbar-track {
    background:#333;
    }
    
    /* alça da barra*/
    ::-webkit-scrollbar-thumb {
    background:#7b4397;
    border-radius: 20px;
  }
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: linear-gradient(to right, #42275a , #000428 );
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;