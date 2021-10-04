import axios from 'axios';
import { getOrder,getOneOrder,getApprovel } from '../action/orderAction';
import { getSupplier} from '../action/supplierAction';

test('get all orders', () => {
    const test1 = getSupplier();
    expect(test1).not.toBeNull();
});




test('get all orders', () => {
    const test1 = getOrder();
    expect(test1).not.toBeNull();
});


test('get a one order', () => {
    const test1 = getOneOrder();
    expect(test1).toBe('Successfully get one order');
});

test('get approval', () => {
    const test1 = getApprovel();
    expect(test1).toBe('Successfully get the approval');
});


test('Get All Orders', () => {
    axios.get("http://localhost:8020/order/readOder").then((res) => {
        expect(res).not.toBeNull();
    })
});





test('get order for a given supplier', () => {
    axios.get("http://localhost:8020/reply/get-orders/61583bef07da95012053790b").then((res) => {
        expect(res).not.toBe(null);
    })
});

test('get order', () => {
    axios.get("http://localhost:8020/order/find/61583cf207da950120537913").then((res) => {
        expect(res).not.toBe(null);
    })
});


test('get supplier name by given ID ', () => {
    axios.get("http://localhost:8020/supplier/find/61583bef07da95012053790b").then((res) => {
        expect(res).not.toBe(null);
    })
});

test('get estimate cost for a given order ID ', () => {
    axios.get("http://localhost:8020/reply/get-estimate/61583cf207da950120537913").then((res) => {
        expect(res).toBe(null);
    })
});
















