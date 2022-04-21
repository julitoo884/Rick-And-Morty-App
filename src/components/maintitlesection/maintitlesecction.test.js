import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import MainTitleSection from "./index";

describe('<MainTitleSection/>' , () => {

    const data = {
        title : 'Title here',
        subtitle : 'Subtitle here'
    }

    let component

    beforeEach(() => {
        component = render(
            <MainTitleSection title={data.title} subtitle={data.subtitle} />
        )
    }) 

    test('render title content' , () => {
        let parameter =  data.title || 'Title'
        component.getByText(parameter)
    })

    test('render subtitle content' , () => {
        let parametersub =  data.subtitle || 'Subtitle'
        component.getByText(parametersub)
    })

}) 