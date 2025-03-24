import styled from "styled-components";

export const FormContainer = styled.div`
    width: 25%;
    height: 100%;
    gap: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
        border: 0;
        border-radius: 6px;
        padding: 0.25rem;

        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["gray-200"]};
    }
`;

export const TextContainer = styled.text`
    display: flex;

    color: ${props => props.theme.white}
`;

export const ButtonSubmit = styled.button`
    width: 100%;
    border: 0;
    padding: 0.5rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;

    cursor: pointer;

    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme["gray-100"]};

    &:hover {
        background: ${props => props.theme["green-700"]};
    }
`;