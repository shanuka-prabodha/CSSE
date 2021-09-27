import axios from 'axios';

const urlgetorder = 'http://localhost:8020/order/readOder';

export const fetchorder = () => axios.get(urlgetorder);

