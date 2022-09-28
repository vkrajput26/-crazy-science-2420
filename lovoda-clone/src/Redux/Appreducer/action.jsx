import * as types from "./actiontype"
import axios from "axios"

const getProduct = (products) => ({
    type: types.GET_PRODUCT,
    payload: products
})


export const loadProduct = () => {
    return function (dispatch) {
        axios.get(`https://lovodaapi.herokuapp.com/api/earrings`).then(res => {
            console.log("RESPONSE", res)
            dispatch(getProduct(res.data))
        }).catch(er => {
            console.log("ERROR")
        })
    }

}