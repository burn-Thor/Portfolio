import styled from "styled-components";
import {Link} from 'react-router-dom';

export const BackgroundC = styled.div`
    background-color:#2F3061;
`

export const FooterContainer = styled.footer`
    display: flex;
    background: #345995;
    border: 8px solid #2F3061;
    border-radius: 25px 25px 0px 0px;
    @media screen and (max-width: 820px) {
        padding: 32px;
    }
`


export const FooterLinksItems = styled.div`
    display:flex;
    align-items: flex-start;
    justify-content: space-around;
    margin: 16px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    color: #43BCCD;

    @media screen and (max-width: 420px) {
            margin: 0;
            padding: 10px;
            width: 100%;
    }
    `

    export const FooterLinkTitle = styled.h1`
        font-size: 28px;
        margin-bottom: 16px;
    `

    export const FooterLink = styled(Link)`
        display: flex;
        flex-wrap: nowrap;
        color: #A0A1A1;
        text-decoration: none;
        margin-bottom: 0.5rem;
        font-size: 18px;
    
    &:hover {
        color: #43BCCD;
        transition: 0.3s ease-out;
    }
    `
    export const Games = styled.a`
    display: flex;
    flex-wrap: nowrap;
    color: #A0A1A1;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 18px;

    &:hover {
    color: #43BCCD;
    transition: 0.3s ease-out;
    }
    `

