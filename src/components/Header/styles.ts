import styled from "styled-components";

export const HeaderContainer = styled.header`
    nav {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
    }

    a {
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${props => props.theme["gray-100"]}
    }
`;