import React from 'react'

import { render, screen } from '@testing-library/react'
import LoadingSpinner from './index'

describe('<LoadingSpinner />', () => {

    let component 

    beforeEach(() => {
          component = render(
            <LoadingSpinner />
          )
    })

    test('renders appropriately container', () => {
      expect(component.getByTestId('Loading-spinner-container')).toBeInTheDocument()
    })

    test('renders appropriately spinner', () => {
      expect(component.getByTestId('rings-loading')).toBeInTheDocument()
    })

})   