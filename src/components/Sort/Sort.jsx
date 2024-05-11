import React, { useContext } from "react"
import { productContext } from "../../context/ProductContext";
import { BsSortNumericDown, BsSortNumericDownAlt } from "react-icons/bs";

const Sort = () => {
  const {sortedAsc , handleSort} = useContext(productContext)
  return (
    <div>
        {sortedAsc ?(
          <BsSortNumericDown style={{fontSize:"2rem", color:"#fffffe"}} onClick={()=>handleSort()}/>
        ): (
          <BsSortNumericDownAlt style={{fontSize:"2rem", color:"#fffffe"}} onClick={()=>handleSort()}/>
        )}
    </div>
  )
};

export default Sort
