import styled from 'styled-components';

export const Input = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + label span {
        left: calc(100% - 2px);

        transform: translateX(-100%);
    }
`;
export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 50px;
    height: 28px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;

    span {
        content: '&#x1F31A;';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 25px;
        height: 25px;
        border-radius: 45px;
        transition: 0.2s;
        background: ${props => props.theme.bgColor};
        filter: invert(100%);
        box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }

    &:active {
        span {
            width: 60px;
        }
    }
`;
