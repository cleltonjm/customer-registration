import styled from 'styled-components'

export const TextContainer = styled.text`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme.white};

    a {
        font-weight: bold;
        color: inherit;
    }
`
