import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const useSingleProductDetails=()=>{
    const {Id} = useParams();
    const [item, setItem] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:3000/inventory/${Id}`)
        .then(res=> res.json())
        .then(data=> setItem(data))
    },[Id])

    return [item, Id];
}

export default useSingleProductDetails;