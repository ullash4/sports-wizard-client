import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import AddItems from '../Pages/AddItems/AddItems';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogInandRegi/LogIn';
import Register from '../Pages/LogInandRegi/Register';
import InventoryTablur from '../Pages/ManageInventory/InventoryTablur';
import ManageItem from '../Pages/ManageItem/ManageItem';
import MyItems from '../Pages/MyItems/MyItems';
import SingleInventoryItem from '../Pages/SingleInventoryItem/SingleInventoryItem';
import NotfoundPage from '../SharedPages/NotfoundPage/NotfoundPage';
import RequireAuth from '../SharedPages/RequireAuth/RequireAuth';

import {AnimatePresence} from 'framer-motion';


function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<InventoryTablur></InventoryTablur>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <SingleInventoryItem></SingleInventoryItem>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/myitems' element={
          <RequireAuth>
        <MyItems></MyItems>
        </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
        <ManageItem></ManageItem>
        </RequireAuth>
        }></Route>
        <Route path='/additems' element={
          <RequireAuth>
        <AddItems></AddItems>
        </RequireAuth>
        }></Route>
        <Route path='*' element={<NotfoundPage></NotfoundPage>}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes