import React, { useEffect } from "react";

import { loadGrid } from "../Redux/Appreducer/action";
import { useDispatch, useSelector } from "react-redux";

const Gridsection = () => {
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log( "INSIDE GRID SECTION",products);
  useEffect(() => {
    dispatch(loadGrid());
  }, [dispatch]);

  return (
      <>
    <div>
      <p>Follow us on instagram @lovodashop</p>
    </div>
    <div className="Grid_BOX">
        {/* {
            products&&products.map((item)=>{
                return(
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                )
            })
        } */}
    </div>
    </>
  );
};

export default Gridsection;
