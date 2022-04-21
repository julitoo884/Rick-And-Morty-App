import styled from "styled-components"

export const Title = styled.h2`
    color: ${props => props.color || 'white'};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`