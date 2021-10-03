import * as api from '../api/supplierApi';

export const getSupplier = (id)=>async(dispatch)=>{

    try{
        const{data} = await api.fetchAssignSupplier(id);
        dispatch({type:'FETCH_SUPLLIER',payload:data})
        console.log(id)
    }catch(error){
        console.log(error)
    }
}