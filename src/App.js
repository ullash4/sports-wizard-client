import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home/Home';
import ManageInventory from './Components/Pages/ManageInventory/ManageInventory';
import Footer from './Components/SharedPages/Footer/Footer';
import Header from './Components/SharedPages/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
