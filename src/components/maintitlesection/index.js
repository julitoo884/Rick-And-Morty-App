import React from 'react'
import { Styledtext } from '../styledtext'
import { MainTitleContent } from './maintitlecontent'

function MainTitleSection ({title, subtitle}) {
    return (
        <MainTitleContent>
            <Styledtext 
                weight='800' 
                size='60px'
                color='#444'
                align='center'
                nowrap={true}
            >
                {title || 'Title'}
            </Styledtext>
            <Styledtext 
                weight='500' 
                size='20px'
                color='#16A5A5' 
                align='center'
            >
                {subtitle || 'Subtitle'}
            </Styledtext>
        </MainTitleContent>
    )
}
export default MainTitleSection  