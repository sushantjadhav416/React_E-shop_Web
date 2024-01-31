import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown.js';
import '../App.css';
//import '../CSS/style.css'


const DropDown = () => {
  return (
    
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All Category
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="Electronics">Electronics</a></li>
            <li><a className="dropdown-item" href="Fashion">Fashion</a></li>
            <li><a className="dropdown-item" href="Grocery">Grocery</a></li>
        </ul>
    </div>
    
  )
}

export default DropDown
