
const initialState={
    products:[],
    totalPrice:0,
    totalQty:0,
    cart: {},
}

export const reducer =(state=initialState, action)=>{
    switch(action.type){

        case 'ADD_TO_CART':
            const {item,quantity}=action.payload;
            return {
                ...state,
                products:[...state.products,item],

            }
        case "CART":
            return{
                ...state,
                cart: action.payload,
            }
            default:
                return state
    }
}