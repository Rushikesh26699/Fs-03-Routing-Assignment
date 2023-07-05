import {createContext,useState} from "react"
import App from "../App"

const myContext = createContext();

export default myContext;

export function CustomProvider(){
    const [cart,setCart] = useState([])
    return (
        <myContext.Provider value={{cart,setCart}} >
             <App/>
        </myContext.Provider>
    )
}