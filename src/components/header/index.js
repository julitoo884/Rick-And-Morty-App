import React from 'react';
import { Link } from 'react-router-dom'
import { StyledNav } from './nav';
import { StyledLinksList } from './linkslist';
import { StyledLink } from './link';
import { StyledImg } from './img'
import ColorPicker from './colorpick';
 
import { colorInitialLoad } from '../../redux/actions/colorInitialLoad';
import { colorChange } from '../../redux/actions/changecolor'; 

import logo from '../../assets/logo.png'

 
function Header(){

    return(
        <StyledNav> 
            
            <Link to='/' title='go to home'>
                <StyledImg src={logo} alt="logo" />
            </Link>

            <StyledLinksList>
                <ColorPicker changecolor={colorChange} initialdata={colorInitialLoad} /> 
                <StyledLink to={`/character/${Math.floor(Math.random() * 826)+1}`}>
                    Random character
                </StyledLink>
            </StyledLinksList>
        </StyledNav> 
    )  
}

export default Header;