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

export const getApprovel = (id)=>async(dispatch)=>{

    try{
        const{data} = await api.fetachApprovel(id);
        dispatch({type:'FETCH_APPROVEL',payload:data})
        console.log(id)
    }catch(error){
        console.log(error)
    }
}


export const deleteorder = (id)=> async(dispatch)=>{
    try{
        await api.deleteOder(id);
        dispatch({type:'DELETE',payload:id});
    }catch(error){
        console.log(error);
    }
}