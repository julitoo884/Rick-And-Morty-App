import styled from "styled-components";

export const Styledtext = styled.p`
    color: ${props => props.color || 'white'};
    margin: 0;
    font-size : ${props => props.size || '30px'};
    font-weight : ${ props => props.weight || '300'};
    white-space: ${props =>  props.nowrap ? 'normal' : 'nowrap'};
    overflow: hidden;
    text-overflow: ellipsis;
    text-align : ${props => props.align || 'left'}
` 