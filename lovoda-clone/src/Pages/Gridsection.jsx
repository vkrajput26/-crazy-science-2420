import React, { useState } from 'react'
import "../Style/Gridsection.css"
import GridData from "../Data/GridData"
import { Button } from '@chakra-ui/react'
const Gridsection = () => {
    const data=GridData

    const [noImages,setnoImages]=useState(8)
   
  return (
      <>
       <p>Follow us on instagram @lovodashop</p>
    <div className='Grid_BOX'>
   
        {
            data&&data.splice(0,noImages).map((item,index)=>{
                return(
                    <div  key={index}>
                        <img 
                        
                        src={item.image} alt="" />
                    </div>
                )
            })
        }
        
    </div>
    <Button className='gridBtn'  disabled={noImages>=25} onClick={()=>setnoImages(noImages+noImages)} >Load More</Button>
   </>
  )
}

export default Gridsection