import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react' 
import ErrorPage from './index' 

import errorimg from '../../assets/connection.png'
import notfound from '../../assets/404.png' 

describe('<ErrorPage />', () => {

    const data = {
        title : "Title Test",
        content : "Content Test",
        titlecolor : "#444",
        image : notfound
    }

    let component
    
    beforeEach(() => {
        component = render(
            <ErrorPage 
                title={data.title}
                content={data.content}
                titlecolor={data.titlecolor}
                image={data.image}
            />
        )
    })

    test('renders appropriately title data ', () => {
        let parameter =  data.title || 'UUPS!' 
        component.getByText(parameter) 
    })

    test('renders appropriately src and alt image ', () => {
        const img = component.getByAltText('404')
        data.image ? expect(img).toHaveAttribute('src', data.image) : expect(img).toHaveAttribute('src', errorimg)
    })

    test('renders appropriately content element and data ', () => {
        const p = component.container.querySelector('p')
        expect(p).toBeInTheDocument()
        let parameter = data.content || 'unidentified bugs'
        component.getByText(parameter)
    })

})