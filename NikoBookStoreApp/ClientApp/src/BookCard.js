import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Button, ButtonToolBar } from 'react-bootstrap';
import BuyBook  from './BuyBook';
import { Modal } from 'react-overlays';
import { FetchData } from './components/FetchData';

let state = { show: false };
let i = 0;
let modalId;
let buttonId;
let closeId;
const BookCard = (props) => {

    i += 1;
    modalId = 'modal' + i;
    buttonId = 'button' + i;
    closeId = 'close' + i;
    return (
  
      
            <div className="card">
                <div className= "card__image-container">
                    <img src={props.image} alt="" />
                </div>

                <div className = "card__content">
                <p class="card__title ">{props.title}</p>
                    
                <p>{props.author}</p>
                <p>{props.publishedDate}</p>
                <div className  = "card__footer">
                    <p ><button className="card__button" value={i} id={i} onClick={showModal}>Buy it</button></p>
            </div>
                </div>
   
            <div id={modalId} className="modal" >


                <div class="modal-content">
                    <span class="close" id={closeId}>&times;</span>
                    <BuyBook author={props.author} desc={props.desc} title={props.title} publishedDate={props.publishedDate} image={props.image} />
                </div>

            </div>

            </div>
     

      

            
    )


}


const showModal = (e) => {
    


    // Get the modal
    var modal = document.getElementById('modal'+ e.target.value);

    // Get the button that opens the modal
    var btn = document.getElementById(e.target.value);

  
    // Get the <span> element that closes the modal
    var span = document.getElementById('close'+e.target.value);

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
   //     modal.style.display = "block";
 
        if (!modal.style.display || modal.style.display == "none") {
            modal.style.display = "block";
        }
        else {
            modal.style.display = "none";
        }




    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";

     
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
       
        }
    }



 
};
       
export default BookCard;