import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import * as actions from './store/actions' 

//import { } from './assets/styles'

import { Icon } from 'react-icons-kit'  

const App = (props) => {

    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch()
    const { app: { map } } = useSelector(state => state)

      return (
            <>

            </>
    )
}

export default App
