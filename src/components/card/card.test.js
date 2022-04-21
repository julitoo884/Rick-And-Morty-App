import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import StyledCardComponent from "./index";
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from "react-dom/test-utils";
import imagenotprovided from '../../assets/404image.webp'

describe('<StyledCardComponent>', () => {

    const data = {
        name : 'Test Character' , 
        id : 1, 
        image : 'random url image', 
        status : 'Test status', 
        species : 'Test species', 
        index : 0
    }       

    let component
    
    beforeEach(() => {
        component = render(
            <Router>
    <           StyledCardComponent 
                    data={data}
                />
            </Router>
        )
    })

    //Data type object   
    if (typeof(data) === 'object') {

        test('render status span ', () => {
            const span = component.container.querySelector('span')
            expect(span).toBeInTheDocument()
        }) 
    
        test('renders appropriately name element ', () => {
            const h2 = component.container.querySelector('h2')
            expect(h2).toBeInTheDocument()
        })
    
        test('renders appropriately name data ', () => {
            let parameter =  data.name || 'unknown name' 
            component.getByText(parameter) 
        })
    
        test('renders appropriately status - species data ', () => {
            let status = data.status || 'unknown status'
            let species = data.species || 'unknown species'
            component.getByText(`${status} - ${species}`) 
        })
    
        test('renders appropriately status - species data element ', () => {
            const p = component.container.querySelector('p')
            expect(p).toBeInTheDocument()
        })
    
        test('renders appropriately href prop ', () => {
            const a = component.container.querySelector('a')
            expect(a.href).toContain(`/character/${data.id}`)
        })
    
        test('clicking the card ', () => {
            const a = component.container.querySelector('a')
            act(() =>{
                a.dispatchEvent(new MouseEvent("click", { bubbles: true }))
            })
        })
    
        test('renders appropriately src and alt image ', () => {
            let parameter =  data.name || 'unknown alt'
            const img = component.getByAltText(parameter)
            data.image ? expect(img).toHaveAttribute('src', data.image) : expect(img).toHaveAttribute('src', imagenotprovided)
        })

    }

    //Data undefined or string or anothe data type
    else {
        test('render invalid properties type error', () => {
            component.getByText('properties passed to Horizontalcard are not as expected')
        })
    }
 
})  
