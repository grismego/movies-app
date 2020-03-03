import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    padding-top: 32px;
    padding-bottom: 16px;
    box-shadow: 0 3px 6px 0 rgba(0, 7, 93, 0.16);
    background-color: ${props => props.theme.bgColor};
`;

export const TopMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Wrapper = styled.div`
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
`;
