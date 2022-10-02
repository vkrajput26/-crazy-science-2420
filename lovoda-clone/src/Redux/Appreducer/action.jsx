import * as types from "./actiontype"
import axios from "axios"

const getProduct = (products) => ({
    type: types.GET_PRODUCT,
    payload: products
})

// const getGrid=(Gridproducts)=>({
//     type:types.GET_GRID,
//     payload:Gridproducts

// })


export const loadProduct = () => {
    return function (dispatch) {
        axios.get(`https://lovodaapi.herokuapp.com/api/earrings`).then(res => {
            console.log("RESPONSE", res)
            dispatch(getProduct(res.data))
            dispatch({type: "CART", payload: "earrings"})
        }).catch(er => {
            console.log("ERROR")
        })
    }

}



// export const loadGrid = () => {
//     return function (dispatch) {
//         axios.get(`https://safe-badlands-27546.herokuapp.com/Gridsection`).then(res => {
//             console.log("RESPONSE", res)
//             dispatch(getGrid(res.data))
//         }).catch(er => {
//             console.log("ERROR")
//         })
//     }

// }