import { colorReducer } from './color'
import { colorChange } from '../actions/changecolor' 
import { colorInitialLoad } from '../actions/colorInitialLoad'

test('should return the initial state', () => {
    expect(colorReducer(undefined, {})).toEqual(
        {
            color : '#444444'
        } 
    )
})

test('should handle a state being added to an null state', () => {
    const previousState = null
    expect(colorReducer(previousState, colorChange('#FF0000'))).toEqual(
        {
            color : '#FF0000'
        }
    )
}) 

test('should handle a state that updates to the initial state if needed', () => {
    const previousState = {
        length : '#FF0000'
    }
    expect(colorReducer(previousState, colorInitialLoad())).toEqual(
        {
            color : '#444444'
        }
    )
})