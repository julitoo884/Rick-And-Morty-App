import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from "redux";
import { fireEvent } from "@testing-library/react";

import { colorInitialLoad } from "../../../redux/actions/colorInitialLoad";
import { colorChange } from "../../../redux/actions/changecolor";
import { reducerMaster } from "../../../redux/reducers/root-reducer";
 
 
import ColorPicker from './index';


let store = createStore(reducerMaster);

 
describe('<ColorPicker />' , () => { 

    let component
    
    beforeEach(() => { 
        component = render(
            <Provider store={store}>
                <ColorPicker changecolor={colorChange} initialdata={colorInitialLoad} /> 
            </Provider>         
        )
    })

    test('renders appropriately button component and picker color ', () => {
        const button = component.container.querySelector('button')
        expect(button).toBeInTheDocument()
        fireEvent.click(button)         
        expect(component.getByLabelText('hex')).toBeInTheDocument()          
    })

    test('renders appropriately container component ', () => {
        expect(component.getByTestId('color-picker-content')).toBeInTheDocument()
    })

}) 