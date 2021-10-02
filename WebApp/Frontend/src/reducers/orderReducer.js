export default(orderReducer = [],action)=>{
    switch(action.type){
        case 'FEATCH_ALL' :
            return action.payload;

            case 'FEATCH_ONE' :
                return action.payload;

                case 'UPDATE_ORDER_STAFF':
                    return orderReducer.map((post)=>post._id === action.payload._id ? action.payload:post);

                    case 'FETCH_APPROVEL' :
            return action.payload;
        default:
            return orderReducer;    
    }
}


