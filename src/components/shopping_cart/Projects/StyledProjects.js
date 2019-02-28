import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 4fr 5fr 1fr;
    grid-template-areas: 
    "header header header"
    "body body body"
    "footer footer footer";
    grid-gap: .75em;
    height: 100vh;
    border: solid;
`;

export const Header = styled.div`
    grid-area: header;
    border: solid;
    
`;

export const Body = styled.div`
    grid-area: body;
    border: solid;

`;

export const Footer = styled.div`
    grid-area: footer;
    border: solid;

`; 