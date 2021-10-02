import * as api from '../api/orderApis';

export const getOrder = () =>async(dispatch)=>{
    try{
        const {data} =await api.fetchorder();
        dispatch({type:'FEATCH_ALL',payload:data});
    }catch(error){
        console.log(error);
    }
}


export const getOneOrder = (id) =>async(dispatch)=>{
    try{
        const {data} =await api.fetchoneorder(id);
        dispatch({type:'FEATCH_ONE',payload:data});
    }catch(error){
        console.log(error);
    }
}




export const updateStaffOrder =(id,post) => async(dispatch)=>{
    try {

        const {data}  =await api.updateorderstaff(id,post);
        dispatch({type:'UPDATE_ORDER_STAFF',payload:data})

        
    } catch (error) {
        console.log(error)
    }
}

