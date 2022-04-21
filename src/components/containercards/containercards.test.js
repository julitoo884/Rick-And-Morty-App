import { ContainetCards } from './index'
import { logDOM, prettyDOM, render } from '@testing-library/react'


describe('<ContainetCards />' , () => {

    let color = '#FF0000'

    let component
    
    beforeEach(() => {
        component = render(
            <ContainetCards data-testid="container-card" bg={color}></ContainetCards>
        )
    })

    test('background color property working correctly', () => {
        let card = component.getByTestId('container-card')
        let colorToProp = color || '#444'
        prettyDOM(card)
        expect(card).toHaveStyle({
            backgroundColor: colorToProp
        })
    })

}) 
