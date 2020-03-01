import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    padding-top: 32px;
    padding-bottom: 16px;
    box-shadow: 0 3px 6px 0 rgba(0, 7, 93, 0.16);
    background-color: ${props => props.theme.bgColor};
`;
