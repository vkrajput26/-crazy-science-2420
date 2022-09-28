import React, { useEffect, useState } from "react";
import "../Style/HomeEarrings.css";
import { loadProduct } from "../Redux/Appreducer/action";
import { useDispatch, useSelector } from "react-redux";

const Earrings = () => {
  const [hovering, setHovering] = useState(false);
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log("Inside PRODUCT PAGE", products);
  useEffect(() => {
    dispatch(loadProduct());
  }, [dispatch]);

  return (
    <div className="product-gallery">
      {products &&
        products.map((item) => {
          return (
            <>
              <div className="product_card" key={item.id}>
                <div>
                  <img style={{cursor:"pointer"}}
                     onMouseEnter={e => (e.currentTarget.src =`${item.hoverImage}`)}
                     onMouseLeave={e => (e.currentTarget.src =`${item.image}`)}
                    src={item.image}
                    alt=""
                  />

                  <p >{item.name}</p>
                  <p style={{ fontWeight: "bold" }}>$ {item.price}</p>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Earrings;
