import React,{useEffect} from 'react'
import "../Style/HomeEarrings.css"
import {loadProduct} from "../Redux/Appreducer/action"
import { useDispatch, useSelector } from "react-redux";

const Earrings = () => {
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
 console.log("Inside PRODUCT PAGE",products)
  useEffect(() => {
    dispatch(loadProduct());
  }, [dispatch]);
  return (
    <div className='product-gallery'>
    {
      products && products.map((item)=>{
        return(
          <>
          <div className='product_card'  key={item.id}>
          <div   >
          <img src={item.image} alt="" />
          
          <p>{item.name}</p>
          </div>
          </div>
          </>
        )
      })
    }
   
    </div>
  )
}

export default Earrings