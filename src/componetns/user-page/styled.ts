import styled from 'styled-components';

export const WrapperImg = styled.div`
    display: flex;
    border-radius: 16px;
`;
export const Img = styled.img`
    width: 272px;
    height: 272px;
`;

export const Container = styled.div`
    display: flex;
`;

export const UserInfo = styled.div`
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    width: 50%;

    div {
        color: #adadad;
    }
    span {
        width: 72px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 24px;
        color: #000000;
    }
`;

export const UserInfoHeader = styled.div`
    margin-bottom: 28px;
    padding-bottom: 28px;
    border-bottom: 1px dashed #adadad;
`;

export const UserName = styled.div`
    margin-bottom: 28px;
    input {
        padding: 10px 7px;
        color: #000;
        border-radius: 8px;
        border: solid 1px #dedede;
    }
`;
export const UserBio = styled.div`
    display: flex;
    align-items: center;
    textarea {
        padding: 10px 7px;
        color: #000;
        resize: none;
        /* width: 560px; */
        flex-grow: 1;
        border-radius: 8px;
        border: solid 1px #dedede;
    }
`;

export const ButtonBlock = styled.div`
    display: flex;
    margin-left: auto;
    margin-top: 24px;

    button ~ button {
        margin-left: 20px;
    }
`;
