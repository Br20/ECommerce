import React, { useContext } from "react"
import { productContext } from "../../context/ProductContext";

const Search = () => {
    const {handleQuery} = useContext(productContext)
    return (
        <input type="text" className="searchInput" placeholder="Filter by name" aria-label="Search" name="Filter by name" onChange={(e) => handleQuery(e.target.value)} />
    )
};

export default Search
