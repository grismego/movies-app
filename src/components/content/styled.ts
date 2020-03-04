import styled from 'styled-components';

export const ContentWrapper = styled.section`
    max-width: 1200px;
    margin: 32px auto;
    display: flex;
    flex-direction: column;
    flex: 1;
    background: ${props => props.theme.bgColor};
`;
