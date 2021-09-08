import axios from "axios";

 const instance = axios.create({
     baseURL: 'https://6137250beac1410017c1817f.mockapi.io'
});

export const GET_ALL_ITEMS_REQUEST = 'GET_ALL_ITEMS_REQUEST';
export const GET_ALL_ITEMS_SUCCESS = 'GET_ALL_ITEMS_SUCCESS';
export const GET_ALL_ITEMS_FAIL = 'GET_ALL_ITEMS_FAIL';

const getAllItemsSuccess = (payload) => ({type: GET_ALL_ITEMS_SUCCESS, payload})
const getAllItemsFail = (payload) => ({type: GET_ALL_ITEMS_FAIL, payload})

export const getAllItems = () => async (dispatch) => {
    return await instance.get('/getAllItems')
    .then(res => dispatch(getAllItemsSuccess(res.data)))
    .catch(err => dispatch(getAllItemsFail(err)))
}

export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
const getItemSuccess = (payload) => ({type: GET_ITEM_SUCCESS, payload})

export const getItem = (id) => async (dispatch) => {
    return await instance.get(`/getAllItems/${id}`)
    .then(res => dispatch(getItemSuccess(res.data)))
}