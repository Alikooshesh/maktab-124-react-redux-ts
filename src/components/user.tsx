import { useContext } from 'react'
import {AppContext} from '../App'
import useCheckHasTodo from '../hooks/useCheckHasTodo'

const User = ()=>{

    const {todoList} = useContext(AppContext) ?? {todoList: []}

    const {hasTodo} = useCheckHasTodo()

    console.log({todoList,hasTodo})
    return(
        <p>hi my name is ali and im 24</p>
    )
}

export default User