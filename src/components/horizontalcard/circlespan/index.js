import styled from "styled-components";

export const CircleSpan = styled.span`
    height: 10px;
    width: 10px;
    background-color: ${props => props.color || 'white'};
    border-radius: 50%;
    display: inline-block;
    animation-name: palpite;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    @keyframes palpite {
    0% { opacity : 1 }
    40% { opacity : 0.75 }
    60% { opacity : 0.5 }
    100% { opacity : 1 }
    }
`