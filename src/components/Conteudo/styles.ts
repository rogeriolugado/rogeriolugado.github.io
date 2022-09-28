import styled from 'styled-components'

export const Container = styled.section `
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 3rem;
    justify-content: center;

    #main{
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0;
        padding: 0;

        @media (max-width: 500px){
            width: 90%;
        }
        hr{
            color: black;
            width: 100%;
            margin: 0;
            padding: 0;
            border:1px solid black;
        }
    }

    .titulo {
        color: black;
        font-size: 30pt;
        text-align: left;
        font-weight: 500;
        margin: 2.5rem 0 0 0;

    }

    .conteudo{
        margin: 0.5rem;
        text-indent: 3rem;
        text-align: justify;
        font-size: 1.5rem;
        min-height: fit-content;
        max-height: 100%;
        max-width: 100%;
        h2{
            font-weight: 400;
            text-indent: 0rem;
        }
        
        h3{
            font-size: 2rem;
            text-indent: 0rem;
            margin:0;
            padding: 3rem 0 0 0;
        }
        h4{
            font-weight: 600;
            text-indent: 0rem;
        }
        h6{
            font-weight: 500;
            text-indent: 0rem;
            margin:0;
            padding: 0;
        }
        li{
            text-indent: 0rem;
        }
        @media (max-width: 500px){
            height: 100%;
        }
    }
`