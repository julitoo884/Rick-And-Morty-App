import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM, render , screen } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import { MemoryRouter } from 'react-router-dom'

import { MockedProvider } from '@apollo/client/testing';
import Character from './index'

import GET_INDIVIDUAL_DATA from "../../graphql/individualdata.graphql";

describe('<Character />' , () => { 

    let component
 
    const mocks = [
        {
            request: {
                query: GET_INDIVIDUAL_DATA,
                variables: { id : undefined }
            }, 
            result : {
                data : {
                    character : { 
                        id : 1,
                        name: "Rick Sanchez",
                        status: "Alive",
                        species: "Human",
                        gender: "Male",
                        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                        location: {
                            "name": "Citadel of Ricks"
                        },
                        origin: {
                            "name": "Earth (C-137)"
                        }
                    }
                }
            }
        }, 
    ]  
    
    beforeEach(() => { 
        component = render( 
            <MemoryRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Character /> 
                </MockedProvider>
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
        expect(component.getByText('Gender:')).toBeInTheDocument() 
        expect(component.getByText('Last known location:')).toBeInTheDocument() 
        expect(component.getByText('Origin:')).toBeInTheDocument() 
        const span = component.container.querySelector('span')
        expect(span).toBeInTheDocument()
    })     

})  

describe('<Character /> with error' , () => {

    let componenterror

    const mocksError = [
        {
            request: {
                query: GET_INDIVIDUAL_DATA,
            },
            error: new Error('An error occurred')
        },
    ]

    beforeEach(() => { 
        componenterror = render( 
            <MemoryRouter>
                <MockedProvider mocks={mocksError} addTypename={false}>
                    <Character /> 
                </MockedProvider>
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
