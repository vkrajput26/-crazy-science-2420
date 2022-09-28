import React, { useEffect, useState } from 'react';
import Filter from '../Components/Filter';

const Productpage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://lovodaapi.herokuapp.com/api/newarrivals")
        .then((res) => res.json())
        .then((res)=>{
            setData(res);
        })
    },[]);

  return (
    <div style={{border: "1px solid red", width:"80%", margin:"auto"}}>
        <h1 style={{marginRight: "90%", fontWeight:"normal"}}>New</h1>
        <Filter/>
        <div style={{ border: "1px solid black", display:"grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 4fr))", gap: "10px",justifyItems: "center", marginTop:"15px" }}>
            { data?.map((item) => {
                return(
                    <div style={{ border:"1px solid green", height: "480px", width: "100%" }}>
                        <div>
                           <img src={`${item.image}`} alt="image" style={{ width: "100%", height: "400px" }}/>
                        </div>
                        <div>{item.name}</div>
                        <div>${item.price}.00</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Productpage;
