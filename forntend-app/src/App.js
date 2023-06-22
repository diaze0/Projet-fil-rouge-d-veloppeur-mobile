import * as React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'

import EditProduct from "./components/edit.component";
import CreateProduct from "./components/create.component";
import ProductList from "./components/list.component";
import Health from './components/Health';

function App() {
  return (
 <Router>

      <nav className="navbar navbar-expand-lg bg-indigo-200">
        <div className="container-fluid">
        
          <Link to="/" className=" navbar-brand">Informations patient</Link>
          <Link className="btn btn-outline-primary fs-5  " to="/product/create">la saisie des données</Link>
          <Link className="btn btn-outline-primary fs-5 ml " to="/health">Diabèteh</Link>
         

         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
             
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/product/create">la saisie des données</Link>
              </li>   */}
            {/* </ul>  */}
          </div>
        </div>
      </nav>

   <Routes>
        <Route path="/product/create" element={<CreateProduct />}></Route>
        <Route path="/product/edit/:id" element={<EditProduct />}></Route>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/health" element={<Health/>}></Route>
   </Routes>
 </Router>
  );
}

export default App;
