import React, { useEffect, useState } from 'react';
import Filter from '../Components/Filter';
import "../styles/Productpage.css";

const Productpage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        fetch(`https://lovodaapi.herokuapp.com/api/newarrivals?_page=${page}&_limit=16`)
        .then((res) => res.json())
        .then((res)=>{
            setData(res);
        })
    },[page]);

  return (
    <div className="main">
        <h1 className="heading1">New</h1>
        <Filter/>
        <div className="first-div">
            {data.map((item) => {
                return(
                <>
                <div className='second-div' key={item.id}>
                    <img className='image'
                        onMouseEnter={e => (e.currentTarget.src = `${item.hoverImage}`)} onMouseLeave={e => (e.currentTarget.src = `${item.image}`)} src={item.image} alt="image"/>
                    <p className="para-1"><a>{item.name}</a></p>
                    <p className="para-2">${item.price}.00</p>
                </div>
                </>
                );
            })}
        </div>
        <p>{page}</p>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
        <button onClick={()=>setPage(page+1)}>NEXT</button>
    </div>
  );
}

export default Productpage;
