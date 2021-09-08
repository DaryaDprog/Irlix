import {GET_ITEM_SUCCESS} from '../action/coctails'


const initialState = {
    coctail: {},
}

 const coctail = (state = initialState, action) => {

    switch (action.type) {
        case GET_ITEM_SUCCESS:
            return {
                ...state,
                coctail: action.payload
        }
        default:
            return state;
    }
}
export default coctail;