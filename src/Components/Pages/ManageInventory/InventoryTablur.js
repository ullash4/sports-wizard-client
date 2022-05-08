import React from 'react';
import { toast } from 'react-toastify';
import useInventory from '../../Hooks/useInventory';


const InventoryTablur = () => {
    const [items , setItems ] = useInventory();
    const handleDelete=(id)=>{
      const sure = window.confirm("Are you sure ?")
      if(sure){
        const url = `http://localhost:5000/product/${id}`
        fetch(url, {
          method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          const rest = items.filter(item=> item._id !== id)
          setItems(rest)
          toast("Your clicked item deleted ")
        })
      }
    }
    return (
        <div className='container'>
           <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Supplier</th>
      <th scope="col">Price</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  {
      items.map(item=>(
        <tbody key={item._id}>
        <tr >
          <td>{item.name}</td>
          <td>{item.supplier}</td>
          <td>${item.price.slice(1,10)}</td>
          <td><button onClick={()=>handleDelete(item._id)} className='border-0 rounded-circle  fw-bolder text-danger'>X</button></td>
        </tr>
      </tbody>
      ))
  }
</table>
        </div>
    );
};

export default InventoryTablur;