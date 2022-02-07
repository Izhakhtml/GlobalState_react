const Reducers = (state,action)=>{
   switch (action.type) {
       case "good luck":
           return state = "good luck"  
       default:
           return state
   } 
}
export default Reducers;