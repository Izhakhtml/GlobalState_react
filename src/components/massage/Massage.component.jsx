import React,{useReducer} from "react";
import MassageAction from "../../actions/Massage-actions";
import Reducers from "../../reducers/Massage-reducer";
const Massages = ()=>{
const[mass,dispatch]=useReducer(Reducers,"massage");
const Click =()=>{
dispatch(MassageAction())    
} 
return(
  <div>
       <h1>{mass}</h1>
       <button onClick={Click}>CLICK</button>

  </div>
)    
}
export default Massages