import styled from "styled-components";

export const StyledImg = styled.img`
    width: calc((100vw - 10rem) / 4);
    height: calc((100vw - 10rem) / 4);

    @media only screen and (max-width :1200px) {
        width : calc((100vw - 10rem) / 3);
        height: calc((100vw - 10rem) / 3);
    }

    @media only screen and (max-width :1000px) {
        width : calc((100vw - 10rem) / 2);
        height: calc((100vw - 10rem) / 2);
    }

    @media only screen and (max-width : 750px) {
        width : calc((100vw - 10rem));
        height: calc((100vw - 10rem));
    }

    @media only screen and (max-width : 500px) {
        width : 100% ;
        height: auto
    }
`