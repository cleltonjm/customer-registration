import styled from 'styled-components'

export const LayoutContainer = styled.div`
    max-width: 75rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;

    background: ${props => props.theme['gray-600']};
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;