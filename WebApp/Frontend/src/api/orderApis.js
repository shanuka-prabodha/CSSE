import axios from 'axios';

const urlgetorder = 'http://localhost:8020/order/readOder';
const urlgetoneoder = 'http://localhost:8020/order/readOneOder';
const urlupdateStaff = 'http://localhost:8020/order/staffupdate'

export const fetchorder = () => axios.get(urlgetorder);
export const fetchoneorder = (id)=>axios.get(`${urlgetoneoder}/${id}`);
export  const updateorderstaff = (id,updateorder) => axios.put(`${urlupdateStaff}/${id}`,updateorder);





