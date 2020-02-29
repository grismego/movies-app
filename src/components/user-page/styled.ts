import styled from 'styled-components';

export const WrapperImg = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
`;
export const Img = styled.img`
    width: 272px;
    height: 272px;
`;

export const InputFile = styled.input`
    font-size: 0;
    width: 0;
    height: 0;
    display: none;
`;
export const LabelInputFile = styled.label`
    font-size: 16px;
    display: flex;
    border-radius: 0 0 16px 16px;
    background-color: #0093ff;
    color: white;
    padding: 8px 18px;
    text-align: center;
    cursor: pointer;
`;

export const Container = styled.div`
    form {
        display: flex;
        flex-wrap: wrap;
    }
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

export const List = styled.div`
    display: grid;
    max-width: 1200px;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
`;

export const Title = styled.h3`
    width: 100%;
    margin-top: 24px;
`;
