import React from "react";
import { CircleSpan } from "./circlespan";
import { StyledImg } from "./img";
import { PersonalInfoContent } from "./personalinfo";
import { Styledtext } from '../styledtext'
import { StyledHorizontalCard } from "./styledhorizontalcard";
import imagenotprovided from '../../assets/404image.webp'
import InvalidProperties from "../invalidproperties";

function HorizontalCard({data}) {

    const { image , name, status, species, location, origin, gender } = data || {}

    return typeof(data) !== 'object' ? <InvalidProperties /> : (
        <StyledHorizontalCard>
            <StyledImg src={image || imagenotprovided} alt={name || 'undefined alt'} />   
            <PersonalInfoContent>
                <Styledtext weight={'bold'} color="#fff">{name || 'unknown name'}</Styledtext>
                <Styledtext color="#fff" size={'15px'} ><CircleSpan color={status === "Alive" ? 'green' : status === "unknown" ? 'yellow' : 'red'} /> {status || 'unknown status'} - {species || 'unknown species'}</Styledtext>
                <br/>
                <Styledtext weight={800} color="#999" size={'15px'} >Gender:</Styledtext>
                <Styledtext color="#fff" size={'15px'} >{gender || 'unknown gender'}</Styledtext>
                <br/>
                <Styledtext weight={800} color="#999" size={'15px'} >Last known location:</Styledtext>
                <Styledtext color="#fff" size={'15px'} >{location?.name || 'unknown location'}</Styledtext>
                <br/>
                <Styledtext weight={800} color="#999" size={'15px'} >Origin:</Styledtext>
                <Styledtext color="#fff" size={'15px'} >{origin?.name || 'unknown origin' }</Styledtext>
            </PersonalInfoContent>
        </StyledHorizontalCard>
    )
}

export default HorizontalCard  
