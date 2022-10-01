import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Style/Gridsection.css";

const Gridsection = () => {

    
    const data=GridData

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://safe-badlands-27546.herokuapp.com/Gridsection")
      .then((res) => {
        setData(res.data);
      })
      .catch((Err) => {
        console.log(Error);
      });
  }, []);

  console.log(data);

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
