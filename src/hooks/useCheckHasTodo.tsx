import { useContext } from "react"
import { AppContext } from "../App"

const useCheckHasTodo = ()=>{
    const myContext = useContext(AppContext)

    return {hasTodo : Boolean(myContext?.todoList.length)}
}

export default useCheckHasTodo