import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0 40px 0;
    color: ${props => props.theme.textColor};

    a {
        color: ${props => props.theme.textColor};
        text-decoration: underline;
    }
`;
