import styled from "styled-components";

export const StyledHorizontalCard = styled.div`
    display : flex;
    border-radius : 12px;
    overflow : hidden;
    box-shadow : 0 5px 10px #444;

    @media only screen and (max-width : 750px) {
        display : block;
        margin-top : 2rem
    }
` 