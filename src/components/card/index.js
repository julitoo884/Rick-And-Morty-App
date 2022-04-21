import React from "react";
import { StyledCard } from "./styledcard";
import { InfoContent } from "./infocontent";
import { Title } from "./title";
import { TextContent } from './textcontent'
import { StyledImg } from "./styledimg";
import { CircleSpan } from "../horizontalcard/circlespan";
import imagenotprovided from '../../assets/404image.webp'
import InvalidProperties from "../invalidproperties";

function StyledCardComponent({data , index}) { 
 
    const { name , id , image, status, species } = data || {}

    return typeof(data) !== 'object' ? <InvalidProperties /> : (
        <StyledCard index={index} to={`/character/${id}`}>
            <StyledImg src={image || imagenotprovided} alt={name || 'unknown alt'} />
            <InfoContent>
                <Title title={name}>{name || 'unknown name'}</Title>
                <TextContent><CircleSpan color={status === "Alive" ? 'green' : status === "unknown" ? 'yellow' : 'red'} /> {status || 'unknown ststus'} - {species || 'unknown species'}</TextContent>
            </InfoContent>
        </StyledCard>    
    ) 
}

export default StyledCardComponent    