import * as api from '../api/orderApis';

export const getOrder = () =>async(dispatch)=>{
    try{
        const {data} =await api.fetchorder();
        dispatch({type:'FEATCH_ALL',payload:data});
    }catch(error){
        console.log(error);
    }
}

