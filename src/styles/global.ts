import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        border: 0;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    body {
        background: ${props => props.theme['gray-700']};

        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;





