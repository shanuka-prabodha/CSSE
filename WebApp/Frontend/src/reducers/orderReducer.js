export default(orderReducer = [],action)=>{
    switch(action.type){
        case 'FEATCH_ALL' :
            return action.payload;

        default:
            return orderReducer;    
    }
}
