import styled from 'styled-components';

export const Button = styled.button`
    font-family: 'PTSans', sans-serif;
    font-size: ${(props: any) => (props.small ? '16px' : '24px')};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    border: none;
    background: white;
    border-radius: 12px 0 12px 12px;
    color: #0093ff;
    padding: ${(props: any) => (props.small ? '5px 8px' : '9px 24px')};
    border: solid 2px ${(props: any) => (props.primary ? '#0093ff' : '#d8d8d8')};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #50c9ff;
        color: white;
    }
`;
