import React from "react";
import RestaurantIcon from '@mui/icons-material/Restaurant';



const Navbar = () => {
    return (

        <>
            <div><div className="col-12 col-sm-12 col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/"><RestaurantIcon style={{color:"blue"}} /> Food's Restaurant</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/cart">Cart</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/menu">Menu</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div></div>
            {/* <nav class="navbar navbar-expand-lg navbar">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="/"><h6><RestaurantIcon /> Food's Restaurant</h6></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      
                            <NavLink className="nav-link " aria-current="page" to="/cart"><h4>Cart</h4></NavLink>
                      
                            <NavLink classNAme="nav-link" aria-current="page" to="/menu"><h4>Menu</h4></NavLink>
                      

                    </div>
                </div>
            </nav> */}

        </>
    )

}
export default Navbar;