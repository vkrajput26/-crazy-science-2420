import React, { useEffect } from "react";
import "../Style/HomeEarrings.css";
import { loadProduct } from "../Redux/Appreducer/action";
import { useDispatch, useSelector } from "react-redux";
import Gridsection from "./Gridsection";

const Earrings = () => {
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log("Inside PRODUCT PAGE", products);
  useEffect(() => {
    dispatch(loadProduct());
  }, [dispatch]);

  return (
    <>
      <div className="product-gallery">
        {products &&
          products.map((item,index) => {
            return (
              < >
                <div className="product_card" key={index} >
                  <div >
                    <img 
                      style={{ cursor: "pointer" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.src = `${item.hoverImage}`)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.src = `${item.image}`)
                      }
                      src={item.image}
                      alt=""
                    />

                    <p >{item.name}</p>
                    <p style={{ fontWeight: "bold" }}>$ {item.price}.00</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="shopFeed">
        <h3>SHOP THE FEED</h3>
        <p>Tag us on instagram @LovodaShop or #Lovoda</p>
      </div>
      <Gridsection/>
    </>
  );
};

export default Earrings;
