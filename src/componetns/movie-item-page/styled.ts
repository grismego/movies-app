import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'PT Sans', sans-serif;
    font-size: 76px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    margin-top: 0;
`;

export const ImgWrapper = styled.div`
    float: left;
    width: 45%;
`;

export const ContentWrapper = styled.div`
    float: right;
    width: 50%;
`;

export const Img = styled.img`
    max-width: 100%;
    height: auto;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;

    li:last-child {
        position: static;
    }
`;
export const ListItem = styled.li`
    margin-right: 12px;
    position: relative;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;

    &::before {
        right: -8px;
        color: grey;
        top: 0;
        position: absolute;
        content: '|';
    }
`;
