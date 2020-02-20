import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;

    &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        content: '';
        display: block;

        backdrop-filter: blur(2.5px);
        opacity: 0.7;
        background-color: #009dff;
    }
`;

export const Modal = styled.div`
    display: flex;
    z-index: 5;
    background: white;
    width: 752px;
    flex-direction: column;
    overflow: hidden;
    margin: auto;
    box-shadow: 0 0 36px 0 rgba(0, 7, 93, 0.16);
    border-radius: 12px 0 12px 12px;
`;

export const Title = styled.h2`
    font-family: 'PTSans', sans-serif;
    font-size: 36px;
    width: 100%;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    text-align: center;
    color: #0093ff;
    margin-bottom: 8px;
`;

export const WrappedContent = styled.div`
    padding: 32px 96px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const Text = styled.p`
    font-family: 'PTSans', sans-serif;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    margin-top: 0;
    margin-bottom: 28px;
    color: #646464;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    border-radius: 12px 0 12px 12px;
    font-size: 20px;
    border: solid 1px #dedede;

    & ~ input {
        margin-top: 24px;
    }
`;

export const WrappedFooter = styled.div`
    background-color: #0093ff;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Link = styled.a`
    font-size: 20px;
    color: white;
    text-decoration: underline;
    transition: 0.3;
    &:hover {
        text-decoration: none;
    }
`;
export const Button = styled.button`
    font-family: 'PTSans', sans-serif;
    font-size: 24px;
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
    padding: 9px 24px;
    cursor: pointer;
    margin-left: 24px;
    transition: 0.3s;

    &:hover {
        background: #50c9ff;
        color: white;
    }
`;
