import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import * as actions from './store/actions' 

import {Box, 
        BoxActions, 
        Button, 
        CheckBox,
        Container, 
        BoxSearch,
        BoxMap, 
        TrackingAdd,
        Driver,
        BoxDrivers,
        BoxSituations,
        Situation,
        Avatar,
        Text,
        InputSearch,
        BoxFilter, 
        Anchor,
         } from './assets/styles'

import { Icon } from 'react-icons-kit'  
import { magnifying_glass } from 'react-icons-kit/ikons/magnifying_glass'        
import { arrows_horizontal } from 'react-icons-kit/ikons/arrows_horizontal'
import { iosLocationOutline } from 'react-icons-kit/ionicons/iosLocationOutline'
import { iosCalendarOutline } from 'react-icons-kit/ionicons/iosCalendarOutline'
import { plus } from 'react-icons-kit/ikons/plus'

const App = (props) => {

    const [loaded, setLoaded] = useState(false)
    const [openTracking, setOpenTracking] = useState(true)
    const dispatch = useDispatch()
  //  const { handleTrackingTemp } = actions
    const { app: { map } } = useSelector(state => state)


      return (
            <>
        
                 <Container className="border">
                        AQUIiiiiiii
                </Container>
            </>
    )
}

export default App
