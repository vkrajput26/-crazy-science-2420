
const initialState={
    products:[],
    totalPrice:0,
    totalQty:0,
}

export const reducer =(state=initialState, action)=>{
    switch(action.type){

        case 'ADD_TO_CART':
            const {item,quantity}=action.payload;
            return {
                ...state,
                products:[...state.products,item],

            }
            default:
                return state
    }
}