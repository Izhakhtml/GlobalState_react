import React,{useContext, useEffect} from "react";
import Massages from "../massage/Massage.component";
import { MsgContext } from '../../context/Massage-context.component'
import { GoodLuckAction, ShowAction } from "../../actions/Massage-actions";
const massageObject = {
    title:"program serever",
    bodyMassage:"server is not connection to please try later",
    writer:"server"
}
const Home =()=>{
const{mass,dispatch} = useContext(MsgContext);
// useEffect(()=>{
//     dispatch(GoodLuckAction(massageObject))
// },[])
const Click =()=>{
    dispatch(GoodLuckAction(massageObject))
}

return(
    <div id="main">
        {/* <h1>mass:{mass.isOpen||<div className="div" >{String(mass.isOpen)}</div>}</h1> */}
        {/* <button onClick={()=>{dispatch(ShowAction({text:"hello world"}))}}>home btn</button> */}
        <button onClick={Click}>Open</button>
        <Massages/>
    </div>
)   
}
export default Home;