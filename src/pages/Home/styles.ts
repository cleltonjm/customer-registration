import styled from 'styled-components'

export const HomeContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 5rem;
`;

export const SignInContainer = styled.div`
    flex: 1;
    width: 40%;  
`;
export const FormContainer = styled.div`
    label {
        color: ${props => props.theme.white}
    }

    input {
        width: 100%;
        border: 0;
        border-radius: 6px;
        padding: 0.25rem;

        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["gray-200"]};
    }
`;

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

export const ButtonSubmit = styled.button`
    width: 100%;
    border: 0;
    padding: 0.5rem;
    border-radius: 8px;
    margin-top: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;

    cursor: pointer;

    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme["gray-100"]};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${props => props.theme["green-700"]};
    }
`;
