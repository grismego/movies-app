import styled from 'styled-components';

interface WrapperI {
    readonly filter: string;
}

export const Label = styled.label`
    margin-right: 16px;
    font-size: 16px;
    color: ${props => props.theme.textColor};
    line-height: 24px;
    input {
        margin-right: 4px;
    }
`;

export const Wrapper = styled.div<WrapperI>`
    flex-wrap: wrap;
    margin-top: 24px;
    display: ${props => (props.filter === 'advanced' ? 'flex' : 'none')};
    button {
        margin-left: auto;
        margin-top: 16px;
    }
`;
