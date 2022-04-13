import React from "react";
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 >Foods' Kitchen </h1><br />
            </div>
            <br /> <br /> <br />
            <div className="container-fluid  d-flex justify-content-center ">
            <div className="row"><div className="col-12">
            <a href="/menu"><Button className="shadow p-3 mb-5 rounded" variant="contained">Go to Menu</Button></a>
            </div></div>
                
            </div>
        </>

    )
};
export default Home;
