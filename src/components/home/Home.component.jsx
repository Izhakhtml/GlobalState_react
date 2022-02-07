import React,{useContext} from "react";
import Massages from "../massage/Massage.component";
import { MsgContext } from '../../context/Massage-context.component'
import { ShowAction } from "../../actions/Massage-actions";
const Home =()=>{
const{mass,dispatch} = useContext(MsgContext);
return(
    <div id="main">
        <h1>mass:{mass.isOpen||<div></div>}</h1>
        <button onClick={()=>{dispatch(ShowAction())}}>home btn</button>
        <Massages/>
    </div>
)  
}
export default Home;