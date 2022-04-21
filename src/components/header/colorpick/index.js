import React, { useState } from "react";
import { CompactPicker } from 'react-color'
import { Button } from "./button";
import { ContainerColor } from "./containerColor";
import { Container } from "./container";
import { useSelector , connect } from "react-redux";


import { colorInitialLoad } from "../../../redux/actions/colorInitialLoad";
import { colorChange } from "../../../redux/actions/changecolor"; 

function ColorPicker ({ changecolor , initialdata }) { 

    const [ showPicker , setShowpicker ] = useState(false)
    
    const { color } = useSelector(data => data.color) 
    
    return (
        <Container data-testid="color-picker-content">
            {showPicker ?   
                <ContainerColor data-testid="color-picker-renderized">
                    <CompactPicker color={color} onChangeComplete={(colordata) => changecolor(colordata.hex)} />
                </ContainerColor>
            : null}    
            <Button onClick={() => setShowpicker(!showPicker)}>
                {showPicker ? "Close" : "BG Color"}
            </Button>
        </Container>
    ) 
}  
 

const mapStateToProps = (state)=> {
    return {
        color : state.color.color,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changecolor: (color) => {dispatch(colorChange(color))}, 
        initialdata: () => {dispatch(colorInitialLoad())}, 
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ColorPicker);