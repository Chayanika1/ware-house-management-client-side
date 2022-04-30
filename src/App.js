
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Error from './Error/Error';
import RequireAuth from './Pages/RequireAuth/RequireAuth'


import ItemDetail from './Pages/ItemDetail/ItemDetail';
import ManageAllProducts from './Pages/ManageAllProducts/ManageAllProducts';
import Invetory from './Pages/GOdown/Invetory';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/ManageAllProducts" element={<ManageAllProducts></ManageAllProducts>}></Route>
        <Route path="/Invetory" element={<Invetory></Invetory>}></Route>
        
        
        <Route path="/ProductName/:name" element={<RequireAuth><ItemDetail></ItemDetail></RequireAuth>}></Route>
       
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
