import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: ${props => props.theme.bgColor};
`;
