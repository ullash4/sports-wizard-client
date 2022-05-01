import { useEffect, useState } from "react"

const useInventoryItems =()=>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('fakeItems.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])

    return [items, setItems]
}

export default useInventoryItems;