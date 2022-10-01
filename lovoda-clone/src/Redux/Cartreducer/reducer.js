
const initialState={
    products:[],
    totalPrice:0,
    totalQty:0,
    increment:0,
    decreament:0,
    cart: [],
}

export const reducer =(state=initialState, action)=>{
    
    let findprod;
    let index;

    switch(action.type){

        case 'ADD_TO_CART':
            const {data,quantity}=action.payload;
            const check=state.products.find(prd=>prd.id===data.id);
            if(check){
                return state;
            }else{
               const total=state.totalPrice+data.price*quantity;
               const totalQ=state.totalQty+quantity;
                data.quantity=quantity;
                return {

                    ...state,
                    products:[...state.products,data],totalQty:totalQ,totalPrice:total
                }
    
            }
            
                case "DELETE":
                    const {item,price}=action.payload;
                    const filter=state.products.filter((data)=>data.id!==item)
                    // const filter1=state.products.find((data)=>data.id-action.payload)
                return{
                    ...state,products:filter,totalPrice:price
                }

                case "ICREAMENT":
                    findprod  =state.products.find((data)=>data.id===action.payload)
                    index=state.products.findIndex((data)=>data.id===action.payload);
                  
                    findprod.quantity+=1;
                    state.products[index]=findprod
                    return{
                        ...state,
                        totalPrice:state.totalPrice +findprod.price,
                        totalQty:state.totalQty+1
                    }



                    case "DECREAMENT":
                        findprod  =state.products.find((data)=>data.id===action.payload)
                        index=state.products.findIndex((data)=>data.id===action.payload);
                        if(findprod.quantity>1){
                            findprod.quantity  -=1;
                            state.products[index]=findprod;
                             return {
                                ...state,
                                totalPrice:state.totalPrice -findprod.price,
                                totalQty:state.totalQty-1
                             }
                        }
                        else {
                            return state
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