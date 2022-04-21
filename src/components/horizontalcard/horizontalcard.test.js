import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render , prettyDOM } from '@testing-library/react'
import HorizontalCard from "./";
import imagenotprovided from '../../assets/404image.webp'

describe('<StyledCardComponent>', () => {

    const data = {
        image : 'random url image', 
        name : 'Test Character' , 
        status : 'Test status', 
        species : 'Test species',
        location : {
            name : 'location test'
        },
        origin : {
            name : 'origin test'
        },
        gender : 'male' 
    }      

    let component
    
    beforeEach(() => {
        component = render(
            <HorizontalCard 
                data={data}
            />
        )
    }) 

    //Data type object   
    if (typeof(data) === 'object') {
        test('render status span ', () => {
            const span = component.container.querySelector('span')
            expect(span).toBeInTheDocument()
        })   
        
        test('render static subtitles', () => {
            component.getByText('Gender:')
            component.getByText('Last known location:')
            component.getByText('Origin:')
        })

        test('render dynamic data', () => {
            let name = data.name || 'unknown name'
            component.getByText(name)
            let gender = data.gender || 'unknown gender'
            component.getByText(gender)
            let location = data.location?.name || 'unknown location'
            component.getByText(location)
            let origin = data.origin?.name || 'unknown origin'
            component.getByText(origin)
        })

        test('renders appropriately src and alt image ', () => {
            let parameter =  data.name || 'undefined alt'
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
