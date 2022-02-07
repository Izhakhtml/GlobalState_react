import React,{useReducer} from "react";
import Reducers from '../reducers/Massage-reducer'
export const MsgContext = React.createContext();
export const MsgProvider = ({children})=>{
const [mass,dispatch] =useReducer(Reducers,{isOpen:false});
return(
    <MsgContext.Provider value={{mass,dispatch}}>
        {children}
    </MsgContext.Provider>
)    
}