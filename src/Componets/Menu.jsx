import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import food from "./API";
import { useDispatch } from "react-redux";
import { incNumber, decNumber } from "./Redux/Action";
import { useSelector } from "react-redux";






export const Card = (props) => {

    const dis = useDispatch();
    const Remove = () => {
        const Element = document.getElementById("cards")
        Element.remove();

    };





    return (

        <>

            <div className="cards" >
                <div className=" shadow p-3 mb-5 bg-white rounded card" id="cards" >
                    <Button variant="contained" color="error" onClick={Remove}> <RemoveIcon />Remove</Button><br />

                    <img src={props.img} class="card-img-top" alt="Food's" />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center " style={{ "color": "grey" }}>{props.title}</h5>
                        <p class="card-text"> Cost : {props.cost}</p>
                        <p class="card-text">Number of items : {props.items} </p>

                        <div className="d-flex justify-content-between">

                            <Button variant="contained" color="error" onClick={() => dis(decNumber())}> <RemoveIcon /></Button>
                            <Button variant="contained" onClick={() => dis(incNumber())}><AddIcon /></Button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}


const Menu = () => {

    const Allremove = () => {
        const RemoveAll = document.getElementById("Removeall")
        RemoveAll.style.display ="none"

    }
    return (

        <>

            <div id="Removeall" className="col-12 col-sm-12 col-lg-12">
            
            <div className="d-flex justify-content-center">
                <Button variant="contained" color="error" onClick={Allremove} >All Remove</Button>
            </div>

                {food.map((val) => {

                    let mystate = useSelector((state) => state.changeNumber);

                    return (
                        <Card img={val.img}
                            title={val.title}
                            cost={val.cost}
                            items={mystate} />)

                })}
            </div>


        </>
    )

};
export default Menu;
