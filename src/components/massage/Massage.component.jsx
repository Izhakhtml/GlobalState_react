import React,{useContext} from "react";
import {GoodLuckAction,PrimaryAction} from "../../actions/Massage-actions";
import { MsgContext } from "../../context/Massage-context.component";
const Massages = ()=>{
const {mass,dispatch} = useContext(MsgContext);
const Click =()=>{
dispatch(GoodLuckAction("success"))    
} 
const Click2 =()=>{
dispatch(PrimaryAction("primary"))    
} 
return(
  <div >
       <h1 >massage state:{mass.isOpen}</h1>
       <button onClick={Click}>Success</button> 
       <button onClick={Click2}>Primary</button>
  </div>
)    
}
export default Massages