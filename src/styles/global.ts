import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps{
    tema: 'claro'|'escuro'
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    :root{
        --primary-color: #92D2F6;
        --primary-color-hover: #6AC4F8;
        --secundary-color: #D9D9D9;
        --secundary-color-hover: #B2ACAC;

        --color-white-primary: #FFFFFF;
        --color-white-secondary: #F4F4F5;
        --color-grey-primary: #D4D4D8;
        --color-grey-secondary: #F5F5F5;
        --color-black-primary: #353b48;
    }
    html{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
    body{
        background: ${props => props.tema === 'claro'? "var(--secundary-color)" : "var(--color-black-primary)"};
        color: black;
        max-width: 100vw;
        overflow-x: hidden;
    }
    /* ===== Scrollbar CSS ===== */
  

`
export default GlobalStyle