import React from 'react';
import useInventory from '../../Hooks/useInventory';


const InventoryTablur = () => {
    const [items] = useInventory();
    const handle=()=>{
        console.log('okkk');
    }
    return (
        <div className='container'>
           <table className="table">
  <thead>
    <tr>
      <th scope="col">Serieal</th>
      <th scope="col">Name</th>
      <th scope="col">Supplier</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  {
      items.map(item=>(
        <tbody key={item._id}>
        <tr >
          <th scope="row">{item.index}</th>
          <td>{item.name}</td>
          <td>{item.supplier}</td>
          <td>{item.price}</td>
          <button onClick={handle} className='border-0 fs-2 fw-bolder text-danger'>X</button>
        </tr>
      </tbody>
      ))
  }
</table>
        </div>
    );
};

export default InventoryTablur;