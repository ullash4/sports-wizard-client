import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Components/Pages/AddItems/AddItems';
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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MyItems from './Components/Pages/MyItems/MyItems';
import ManageItem from './Components/Pages/ManageItem/ManageItem';
import RequireAuth from './Components/SharedPages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <SingleInventoryItem></SingleInventoryItem>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/manageitem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/table' element={<InventoryTablur></InventoryTablur>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='*' element={<NotfoundPage></NotfoundPage>}></Route>
      </Routes>
      <Footer></Footer>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
