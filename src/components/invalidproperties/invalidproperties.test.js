import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import InvalidProperties from "./index";

describe('<InvalidProperties />' , () => {
    
    let component
    
    beforeEach(() => {
        component = render(
            <InvalidProperties/>
        )
    })

    test('Render invalid propeties text' , () => {
        component.getByText('properties passed to Horizontalcard are not as expected')
    })

})