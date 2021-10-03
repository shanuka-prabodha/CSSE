export default(supplierReducer = [],action)=>{
    switch(action.type){
        case 'FETCH_SUPLLIER' :
            return action.payload;
                
        default:
            return supplierReducer;    
    }
}