import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from "redux";

import logo from '../../assets/logo.png'

import { reducerMaster } from "../../redux/reducers/root-reducer";

import Header from "./index"; 

let store = createStore(reducerMaster);
 
describe('<Header />' , () => {

    let component
    
    beforeEach(() => { 
        component = render(
            <MemoryRouter >
                <Provider store={store}>
                    <Header />
                </Provider>
            </MemoryRouter>
        )
    })

    test('renders appropriately nav component ', () => {
        const nav = component.container.querySelector('nav')
        expect(nav).toBeInTheDocument()
    })

    test('renders random character link ', () => {
        expect(component.getByText('Random character').href).toContain("/character/")
    })

    test('render go to home element correctly' , () => {
        component.getByTitle('go to home')
        const img = component.container.querySelector('img')
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute('src', logo)
        const link = component.getByTitle('go to home')
        expect(link).toHaveAttribute('href', '/')
    })

}) 