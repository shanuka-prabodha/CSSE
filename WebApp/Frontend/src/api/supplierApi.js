import axios from 'axios';
const urlAssignsupplier = 'http://localhost:8020/supplier/assignsupplier';


export const fetchAssignSupplier =(id)=> axios.get(`${urlAssignsupplier}/${id}`);


