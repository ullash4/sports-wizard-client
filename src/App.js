import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home/Home';
import LogIn from './Components/Pages/LogInandRegi/LogIn';
import Register from './Components/Pages/LogInandRegi/Register';
import InventoryTablur from './Components/Pages/ManageInventory/InventoryTablur';
import ManageInventory from './Components/Pages/ManageInventory/ManageInventory';
import SingleInventoryItem from './Components/Pages/SingleInventoryItem/SingleInventoryItem';
import Footer from './Components/SharedPages/Footer/Footer';
import Header from './Components/SharedPages/Header/Header';
import NotfoundPage from './Components/SharedPages/NotfoundPage/NotfoundPage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/inventory/:id' element={<SingleInventoryItem></SingleInventoryItem>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/table' element={<InventoryTablur></InventoryTablur>}></Route>
        <Route path='*' element={<NotfoundPage></NotfoundPage>}></Route>
      </Routes>
      <Footer></Footer>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
