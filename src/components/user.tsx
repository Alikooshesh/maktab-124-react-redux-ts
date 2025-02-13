import { useContext } from 'react'
import {AppContext} from '../App'

const User = ()=>{

    const contextData = useContext(AppContext)
    console.log({contextData})
    return(
        <p>hi my name is ali and im 24</p>
    )
}

export default User