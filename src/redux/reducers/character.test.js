import { characterReducer } from "./characters";
import { lengthCharactersChange } from '../actions/changelenghtcharacters'
import { characterInitialLoad } from '../actions/charactersInitiallength'

test('should return the initial state', () => {
    expect(characterReducer(undefined, {})).toEqual(
        {
            length : 0
        }
    )
})

test('should handle a state being added to an null state', () => {
    const previousState = null
    expect(characterReducer(previousState, lengthCharactersChange(1))).toEqual(
        {
            length : 1
        }
    )
}) 

test('should handle a state that updates to the initial state if needed', () => {
    const previousState = {
        length : 7
    }
    expect(characterReducer(previousState, characterInitialLoad())).toEqual(
        {
          length : 0
        }
    )
}) 