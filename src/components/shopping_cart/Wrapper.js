import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-auto-rows: 500px;
    grid-template-areas: 
        ". a a ."
        ". a a .";
    
`;