import React, { useState } from "react";
import "../Style/Gridsection.css";
import GridData from "../Data/GridData";
import { Button } from "@chakra-ui/react";
const Gridsection = () => {
  const data = GridData;

  const [noImages, setnoImages] = useState(8);
  

  const handleLoad = () => {
    setnoImages(noImages + noImages);
  };

  return (
    <>
      <p>Follow us on instagram @lovodashop</p>
      <div className="Grid_BOX">
        {data &&
          data.splice(0, noImages).map((item, index) => {
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
      <Button
        className="gridBtn"
        disabled={noImages >= 25}
        onClick={handleLoad}
      >
        Load More
      </Button>
    </>
  );
};

export default Gridsection;
