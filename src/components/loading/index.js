import React from 'react'
import { ContainerVerticalAlign } from '../contentnotfound'
import { Rings } from 'react-loader-spinner'

function LoadingSpinner () {
    return (
        <ContainerVerticalAlign data-testid="Loading-spinner-container">
            <Rings color="#16A5A5" ariaLabel="loading-indicator" /> 
        </ContainerVerticalAlign>
    )
}
export default LoadingSpinner