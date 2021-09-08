import {GET_ALL_ITEMS_SUCCESS} from '../action/coctails'


const initialState = {
    coctails: [],
}

 const coctails = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_ITEMS_SUCCESS:
            return {
                ...state,
                coctails: action.payload
        }
        default:
            return state;
    }
}
export default coctails;