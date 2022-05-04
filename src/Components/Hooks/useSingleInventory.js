import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const useSingleInventory = () =>{
    const {id} = useParams();
    const [item, setItem] = useState({})
    useEffect(()=>{
        const url = `http://localhost:3000/inventory/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[id])
    return [id, item];
}

export default useSingleInventory;