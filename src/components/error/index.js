import React from "react";
import errorimg from '../../assets/connection.png'

import { ContainerVerticalAlign } from '../contentnotfound'
import { StyledTitle } from "../title";

function ErrorPage({ content , title, titlecolor, image }) { 
  
  return (
    <ContainerVerticalAlign>
        <StyledTitle color={titlecolor} >{title || 'UUPS!'}</StyledTitle>  
        <img width={'400px'} src={image || errorimg} alt="404" />
        <p>{content ||'unidentified bug'}</p>
    </ContainerVerticalAlign>  
  ); 
}

export default ErrorPage;    