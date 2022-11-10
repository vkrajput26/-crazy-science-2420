

import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Style/Gridsection.css";
import GridData from "../Data/GridData"

const Shopsocial = () => {
  const [data, setData] = useState([]);
console.log("vk",GridData)
  useEffect(() => {
    axios
      .get("https://safe-badlands-27546.herokuapp.com/Gridsection").then((res) => {
        setData(res.data);
      })
      .catch((Err) => {
     
      });
  }, []);

  // console.log(data);

  const [noImages, setnoImages] = useState(8);

  const handleLoad = () => {
    setnoImages(noImages + noImages);
  };

  return (
    <>
      <p>Follow us on instagram @lovodashop</p>
      <div className="Grid_BOX">
        {GridData &&
          GridData.map((item, index) => {
            return (
              <div key={index}>
                <a href={item.srchref}>
                  {" "}
                  <img src={item.image} alt="" />
                </a>
              </div>
            );
          })}
      </div>
      {/* <Button
        className="gridBtn"
        disabled={noImages >= 25}
        onClick={handleLoad}
      >
        Load More
      </Button> */}
    </>
  );
};

export default Shopsocial;









