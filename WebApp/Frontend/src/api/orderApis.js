import axios from 'axios';

const urlgetorder = 'http://localhost:8020/order/readOder';
const urlgetoneoder = 'http://localhost:8020/order/readOneOder';
const urlupdateStaff = 'http://localhost:8020/order/staffupdate'
const urloderApprovel = 'http://localhost:8020/order/readApprovelOder';
const urldeleteoder = 'http://localhost:8020/order/delete'

export const fetchorder = () => axios.get(urlgetorder);
export const fetchoneorder = (id)=>axios.get(`${urlgetoneoder}/${id}`);
export  const updateorderstaff = (id,updateorder) => axios.put(`${urlupdateStaff}/${id}`,updateorder);
export const fetachApprovel  = (_ID)=>axios.get(urloderApprovel,{params:{id:_ID}});
export const deleteOder =(id)=>axios.delete(`${urldeleteoder}/${id}`)



