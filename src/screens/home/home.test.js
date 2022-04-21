import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM, render , screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from "redux";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from 'react-router-dom'

import GET_DATA from "../../graphql/initialData.graphql";
import { MockedProvider } from '@apollo/client/testing';
import { reducerMaster } from "../../redux/reducers/root-reducer"; 


import Home from "./index";

import { lengthCharactersChange } from "../../redux/actions/changelenghtcharacters";

let store = createStore(reducerMaster);
 
describe('<Home />' , () => { 

    let component

    const mocks = [
        {
            request: {
                query: GET_DATA,
            },
            result : {
                data : {
                    characters : {
                        info : {
                            count : 1
                        },
                        results : [
                            {
                                name : 'test name', 
                                id : 1, 
                                image : 'https://testurl.com', 
                                status : 'test status', 
                                species : 'test species'
                            }
                        ]
                    }
                    
                }
            }
        },
    ] 
    
    beforeEach(() => { 
        component = render( 
            <MemoryRouter>
                <Provider store={store}>
                    <MockedProvider mocks={mocks} addTypename={false}>
                        <Home setlength={lengthCharactersChange} /> 
                    </MockedProvider>
                </Provider>         
            </MemoryRouter>
        )
    })

   test('render appropriately loading component' , () => {    
        expect(component.getByTestId('rings-loading')).toBeInTheDocument() 
   }) 

   test('render appropriately success component' , async () => {
        await act(async () => {
            const wait = require('waait');    
            await wait(0)
        })
        expect(component.getByText('Development by Julio Rangel')).toBeInTheDocument() 
        const span = component.container.querySelector('span')
        expect(span).toBeInTheDocument()
    })     

}) 

describe('<Home /> with error' , () => {

    let componenterror

    const mocksError = [
        {
            request: {
                query: GET_DATA,
            },
            error: new Error('An error occurred')
        },
    ]

    beforeEach(() => { 
        componenterror = render( 
            <MemoryRouter>
                <Provider store={store}>
                    <MockedProvider mocks={mocksError} addTypename={false}>
                        <Home setlength={lengthCharactersChange} /> 
                    </MockedProvider>
                </Provider>         
            </MemoryRouter>
        )
    })
    
    test('render appropriately error component' , async () => {

        await act(async () => {
            const wait = require('waait');    
            await wait(0)
        })
        expect(componenterror.getByText('an internet connection could not be established')).toBeInTheDocument() 
    })

})