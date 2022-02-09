import React,{useContext} from "react";
import {GoodLuckAction,PrimaryAction, ShowAction} from "../../actions/Massage-actions";
import { MsgContext } from "../../context/Massage-context.component";
const Massages = ()=>{
const {mass,dispatch} = useContext(MsgContext);
const Click =()=>{
dispatch(GoodLuckAction({text:"success"}))    
} 
const Click2 =()=>{
dispatch(PrimaryAction("primary"))    
} 
const ClickClose =()=>{
  dispatch(ShowAction())
}
return(
  <div>
    {
      mass.isOpen? 
    <div className="div">
    <h1>{mass.title}</h1> 
    <h2>{mass.bodyMassage}</h2>
    <h3>{mass.writer}</h3>
    <button onClick={ClickClose}>Close</button>
    </div>:
    <>
     {""}
    </>
    }
 
       {/* <h1>massage state</h1>
       <h1>{mass.text}</h1>
       <button onClick={Click}>Success</button> 
       <button onClick={Click2}>Primary</button> */}
  </div>
)    
}
export default Massages