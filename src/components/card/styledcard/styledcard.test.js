import { StyledCard } from "./index";
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'


describe('<StyledCard />' , () => {

    let index = 1

    let component
    
    beforeEach(() => {
        component = render(
            <Router>
                <StyledCard data-testid="styled-card" to={`/test/route`} index={index}  />
            </Router>
        )
    })

    test('Opacity on odds working', () => {
        
        let card = component.getByTestId('styled-card')
        let color = (index+1) % 2 ? '#444' : 'rgba(68, 68, 68, 0.5)'
        expect(card).toHaveStyle({
            backgroundColor: color
        })
    })

}) 
