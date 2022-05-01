import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Pages/Blog/Blog';
import Dashboard from './Components/Pages/Dashbord/Dashboard';
import Home from './Components/Pages/Home/Home';
import ManageItems from './Components/Pages/ManageItems/ManageItems';
import Footer from './Components/SharedPages/Footer/Footer';
import Header from './Components/SharedPages/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/inventory' element={<ManageItems></ManageItems>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
